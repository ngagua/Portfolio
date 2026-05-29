import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { profile } from '../../shared/data/profile';
import { AuroraBackgroundComponent } from '../../shared/components/aurora-background/aurora-background.component';
import { CodeWindowComponent } from '../../shared/components/code-window/code-window.component';
import { AuroraTextDirective } from '../../shared/directives/aurora-text.directive';

@Component({
  selector: 'app-hero',
  imports: [AuroraBackgroundComponent, CodeWindowComponent, AuroraTextDirective],
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

  /** Gates the code-window typewriter to client-only so SSR and hydration DOM match. */
  protected readonly isClient = signal(false);

  constructor() {
    afterNextRender(async () => {
      this.isClient.set(true);

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        return;
      }

      // Register teardown before the dynamic import so we never touch a
      // destroyed view if navigation happens mid-load.
      let ctx: { revert(): void } | null = null;
      let destroyed = false;
      this.destroyRef.onDestroy(() => {
        destroyed = true;
        ctx?.revert();
      });

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (destroyed) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const el = this.host.nativeElement;
      ctx = gsap.context(() => {
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
            '[data-hero="cover"]',
            { opacity: 0, scale: 0.96 },
            { ...baseProps, opacity: 1, scale: 1, duration: 0.6 },
            '-=0.35',
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
        gsap.to('[data-hero="cover"] .cw-glow', {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }, el);
    });
  }
}
