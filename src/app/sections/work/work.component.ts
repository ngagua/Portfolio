import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudies } from '../../shared/data/case-studies';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-work',
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly studies = caseStudies;

  constructor() {
    afterNextRender(async () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        return;
      }

      const el = this.host.nativeElement;
      const timeline = el.querySelector<HTMLElement>('.timeline');
      if (!timeline) {
        return;
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Bar fills from top to bottom as the user scrolls through the timeline.
        gsap.fromTo(
          '.timeline-bar-fill',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timeline,
              start: 'top 70%',
              end: 'bottom 75%',
              scrub: 0.4,
            },
          },
        );

        // Each marker dot pops in as the corresponding card reveals.
        timeline.querySelectorAll<HTMLElement>('.timeline-entry').forEach((entry) => {
          const dot = entry.querySelector('.marker-dot');
          if (!dot) return;
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.55,
              ease: 'back.out(2.4)',
              scrollTrigger: {
                trigger: entry,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            },
          );
        });
      }, el);

      this.destroyRef.onDestroy(() => ctx.revert());
    });
  }
}
