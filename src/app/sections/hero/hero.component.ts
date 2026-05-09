import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
} from '@angular/core';
import { profile } from '../../shared/data/profile';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'hero-section',
    id: 'hero',
  },
})
export class HeroComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly name = profile.name;
  protected readonly role = profile.role;
  protected readonly tagline = profile.tagline;
  protected readonly location = profile.location;

  constructor() {
    afterNextRender(async () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        return;
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      const el = this.host.nativeElement;
      const ctx = gsap.context(() => {
        // Use fromTo with `clearProps` so any inline styles GSAP injects are
        // cleaned up after the animation. Shorter durations and gentler
        // y-offsets keep the entrance subtle so the flash from SSR-visible to
        // animation-start is barely perceptible even on slow loads.
        const baseProps = { ease: 'power3.out', clearProps: 'transform,opacity' };
        const tl = gsap.timeline();
        tl.fromTo(
          '[data-hero="eyebrow"]',
          { opacity: 0, y: 6 },
          { ...baseProps, opacity: 1, y: 0, duration: 0.4 },
        )
          .fromTo(
            '[data-hero="line"]',
            { opacity: 0, y: 14 },
            { ...baseProps, opacity: 1, y: 0, duration: 0.55, stagger: 0.07 },
            '-=0.2',
          )
          .fromTo(
            '[data-hero="tag"]',
            { opacity: 0, y: 10 },
            { ...baseProps, opacity: 1, y: 0, duration: 0.45 },
            '-=0.3',
          )
          .fromTo(
            '[data-hero="meta"]',
            { opacity: 0, y: 8 },
            { ...baseProps, opacity: 1, y: 0, duration: 0.4 },
            '-=0.3',
          )
          .fromTo(
            '[data-hero="actions"]',
            { opacity: 0, y: 8 },
            { ...baseProps, opacity: 1, y: 0, duration: 0.4 },
            '-=0.3',
          )
          .fromTo(
            '[data-hero="cue"]',
            { opacity: 0 },
            { ...baseProps, opacity: 1, duration: 0.4 },
            '-=0.2',
          );

        gsap.to('.aurora .orb-a', {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
        gsap.to('.aurora .orb-b', {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }, el);

      this.destroyRef.onDestroy(() => ctx.revert());
    });
  }
}
