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
import { AuroraTextDirective } from '../../shared/directives/aurora-text.directive';
import {
  GradientMeshComponent,
  MeshVariant,
} from '../../shared/components/gradient-mesh/gradient-mesh.component';

@Component({
  selector: 'app-work',
  imports: [RouterLink, RevealOnScrollDirective, AuroraTextDirective, GradientMeshComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** View model: split each title so the first word can take the aurora
   * gradient, and map the slug to a per-project mesh hue. */
  protected readonly studies = caseStudies.map((study) => {
    const space = study.title.indexOf(' ');
    const variant: MeshVariant =
      study.slug === 'nextgen-cares'
        ? 'nextgen'
        : study.slug === 'vitality'
          ? 'vitality'
          : study.slug === 'omedia'
            ? 'omedia'
            : 'default';
    return {
      ...study,
      titleHead: space === -1 ? study.title : study.title.slice(0, space),
      titleRest: space === -1 ? '' : study.title.slice(space),
      meshVariant: variant,
    };
  });

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

      ctx = gsap.context(() => {
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
    });
  }
}
