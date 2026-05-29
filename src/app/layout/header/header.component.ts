import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
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
    afterNextRender(() => {
      const ids = this.links.map((link) => link.id);
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      if (sections.length === 0) {
        return;
      }

      const visible = new Set<string>();
      const observer = new IntersectionObserver(
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

      sections.forEach((section) => observer.observe(section));
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
