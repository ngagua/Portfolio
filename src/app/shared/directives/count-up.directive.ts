import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appCountUp]',
})
export class CountUpDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** Numeric portion of the value to animate up to (e.g. 27 for "27M+"). */
  readonly target = input.required<number>({ alias: 'appCountUp' });
  /** String to render before the number (e.g. ""). */
  readonly prefix = input('', { alias: 'appCountUpPrefix' });
  /** String to render after the number (e.g. "M+"). */
  readonly suffix = input('', { alias: 'appCountUpSuffix' });
  /** Animation duration in seconds. */
  readonly duration = input(1.6, { alias: 'appCountUpDuration' });

  constructor() {
    afterNextRender(async () => {
      const el = this.host.nativeElement;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const finalText = `${this.prefix()}${this.target()}${this.suffix()}`;
      if (reduce) {
        el.textContent = finalText;
        return;
      }

      el.textContent = `${this.prefix()}0${this.suffix()}`;

      // Register teardown synchronously while the view is alive, so we never
      // call onDestroy on a destroyed view after the import resolves.
      let cleanup: (() => void) | null = null;
      let destroyed = false;
      this.destroyRef.onDestroy(() => {
        destroyed = true;
        cleanup?.();
      });

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (destroyed) {
        return;
      }
      gsap.registerPlugin(ScrollTrigger);

      const counter = { value: 0 };
      const target = this.target();

      const tween = gsap.to(counter, {
        value: target,
        duration: this.duration(),
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = `${this.prefix()}${Math.round(counter.value)}${this.suffix()}`;
        },
        onComplete: () => {
          el.textContent = finalText;
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
  }
}
