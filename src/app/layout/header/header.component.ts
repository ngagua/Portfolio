import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { profile } from '../../shared/data/profile';

interface NavLink {
  label: string;
  href: string;
  id: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-header',
    role: 'banner',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  /** Caps the per-attach rAF retry (~30 frames ≈ 0.5s) so it can't spin on section-less routes. */
  private static readonly SPY_MAX_FRAMES = 30;

  private observer: IntersectionObserver | null = null;
  private rafId: number | null = null;

  protected readonly monogram = profile.monogram;
  protected readonly menuOpen = signal(false);
  /** Slug of the section currently in view; drives the active nav link. */
  protected readonly activeId = signal('');
  protected readonly links: NavLink[] = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  constructor() {
    // Scroll-spy: highlight the nav link of the section in view. Client-only
    // (afterNextRender) so SSR markup is untouched; an IntersectionObserver
    // tracks the real scroll position, so it works alongside Lenis smooth scroll.
    //
    // The header lives in the persistent shell while the sections are lazy-loaded
    // into the outlet, so we (re)attach after the first render AND on every
    // navigation. Without the re-attach the observer misses sections that arrive
    // late, or keeps watching stale nodes after a return from a case-study page.
    afterNextRender(() => this.observeSections());

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.observeSections());

    this.destroyRef.onDestroy(() => this.teardownSpy());
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  /** Tear down any live observer/retry, then (re)attach to the sections in the DOM. */
  private observeSections(): void {
    // The NavigationEnd path isn't inherently browser-only — guard before the DOM.
    if (typeof document === 'undefined') {
      return;
    }
    this.teardownSpy();
    this.attachWhenReady(0);
  }

  /**
   * Wait (bounded) for the lazy-loaded sections to exist, then observe them. They
   * may be absent on the first render or for a frame after a navigation, so retry
   * on the next frame; once they're clearly gone (e.g. a case-study page) give up
   * and clear the active link so no stale highlight lingers.
   */
  private attachWhenReady(attempt: number): void {
    const ids = this.links.map((link) => link.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      if (attempt >= HeaderComponent.SPY_MAX_FRAMES) {
        this.activeId.set('');
        return;
      }
      this.rafId = requestAnimationFrame(() => this.attachWhenReady(attempt + 1));
      return;
    }

    const visible = new Set<string>();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        // Active = first section (document order) still crossing the band
        // just below the 64px sticky header.
        this.activeId.set(ids.find((id) => visible.has(id)) ?? '');
      },
      { rootMargin: '-64px 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((section) => this.observer!.observe(section));
  }

  /** Disconnect the observer and cancel any pending retry frame. */
  private teardownSpy(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.observer?.disconnect();
    this.observer = null;
  }
}
