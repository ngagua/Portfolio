import { afterNextRender, Injectable } from '@angular/core';

type LenisInstance = {
  raf: (time: number) => void;
  scrollTo: (target: string | number | HTMLElement, opts?: Record<string, unknown>) => void;
  destroy: () => void;
};

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private lenis: LenisInstance | null = null;
  private rafId: number | null = null;
  private initialized = false;

  init(): void {
    if (this.initialized) {
      return;
    }
    this.initialized = true;

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
