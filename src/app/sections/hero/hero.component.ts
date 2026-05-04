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
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('[data-hero="eyebrow"]', { opacity: 0, y: 12, duration: 0.6 })
          .from(
            '[data-hero="line"]',
            { opacity: 0, y: 36, duration: 0.9, stagger: 0.1 },
            '-=0.3',
          )
          .from('[data-hero="tag"]', { opacity: 0, y: 18, duration: 0.7 }, '-=0.4')
          .from('[data-hero="meta"]', { opacity: 0, y: 12, duration: 0.6 }, '-=0.4')
          .from('[data-hero="actions"]', { opacity: 0, y: 12, duration: 0.6 }, '-=0.4')
          .from('[data-hero="cue"]', { opacity: 0, duration: 0.6 }, '-=0.2');

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
