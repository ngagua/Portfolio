import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealOnScrollDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Optional stagger delay in seconds (e.g. used by parents to chain reveals).
   */
  readonly delay = input(0, { alias: 'appRevealDelay' });

  constructor() {
    afterNextRender(async () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const el = this.host.nativeElement;

      if (reduce) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        return;
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      gsap.set(el, { opacity: 0, y: 28 });

      const tween = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: this.delay(),
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      this.destroyRef.onDestroy(() => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    });
  }
}
