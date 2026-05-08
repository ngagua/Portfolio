import { afterNextRender, DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

type LenisInstance = {
  raf: (time: number) => void;
  scrollTo: (target: string | number | HTMLElement, opts?: Record<string, unknown>) => void;
  destroy: () => void;
};

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  private lenis: LenisInstance | null = null;
  private rafId: number | null = null;
  private initialized = false;

  init(): void {
    if (this.initialized) {
      return;
    }
    this.initialized = true;

    // Reset scroll position on every successful navigation. Doing this through
    // the router (rather than Angular's `scrollPositionRestoration`) keeps Lenis
    // in sync — `window.scrollTo` alone gets clobbered by Lenis's RAF loop, which
    // is why navigating to a tall page like a case study sometimes landed at
    // an arbitrary scroll position (the Outcomes section).
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.resetToTop());

    afterNextRender(async () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        return;
      }

      const { default: Lenis } = await import('lenis');

      this.lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }) as unknown as LenisInstance;

      const tick = (time: number) => {
        this.lenis?.raf(time);
        this.rafId = window.requestAnimationFrame(tick);
      };
      this.rafId = window.requestAnimationFrame(tick);
    });
  }

  scrollTo(target: string | HTMLElement): void {
    this.lenis?.scrollTo(target, { offset: -64 });
  }

  /**
   * Snap to the top of the page. Uses Lenis when available so its internal
   * state matches the DOM scroll position; otherwise falls back to the native
   * scroll API (which also covers SSR/pre-hydration navigations).
   */
  resetToTop(): void {
    if (typeof window === 'undefined') {
      return;
    }
    if (this.lenis) {
      this.lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }

  destroy(): void {
    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.lenis?.destroy();
    this.lenis = null;
    this.initialized = false;
  }
}
