import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
} from '@angular/core';
import {
  certifications,
  education,
  languages,
  practiceBadges,
  skills,
} from '../../shared/data/profile';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly groups = skills;
  protected readonly badges = practiceBadges;
  protected readonly languages = languages;
  protected readonly education = education;
  protected readonly certifications = certifications;
  protected readonly dotsRange = [1, 2, 3, 4, 5];

  constructor() {
    afterNextRender(async () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const el = this.host.nativeElement;
      const cards = el.querySelectorAll<HTMLElement>('.skill-card');
      const cleanups: Array<() => void> = [];

      if (!reduce) {
        cards.forEach((card) => {
          const onMove = (e: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            card.style.setProperty('--mx', `${x * 100}%`);
            card.style.setProperty('--my', `${y * 100}%`);
            card.style.setProperty('--rx', `${(0.5 - y) * 6}deg`);
            card.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
          };
          const onLeave = () => {
            card.style.setProperty('--rx', '0deg');
            card.style.setProperty('--ry', '0deg');
          };
          card.addEventListener('pointermove', onMove);
          card.addEventListener('pointerleave', onLeave);
          cleanups.push(() => {
            card.removeEventListener('pointermove', onMove);
            card.removeEventListener('pointerleave', onLeave);
          });
        });

        const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]);
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          cards.forEach((card) => {
            gsap.fromTo(
              card.querySelectorAll('.dot'),
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'back.out(2)',
                stagger: 0.04,
                clearProps: 'transform,scale,opacity',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 82%',
                  toggleActions: 'play none none none',
                },
              },
            );

            gsap.fromTo(
              card.querySelectorAll('.skill-row'),
              { opacity: 0, x: -12 },
              {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'power3.out',
                stagger: 0.05,
                clearProps: 'transform,opacity',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 82%',
                  toggleActions: 'play none none none',
                },
              },
            );
          });

          const pillsRow = el.querySelector('.practice-row');
          if (pillsRow) {
            gsap.fromTo(
              el.querySelectorAll('.practice-pill'),
              { opacity: 0, y: 14 },
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: 'power3.out',
                stagger: 0.05,
                clearProps: 'transform,opacity',
                scrollTrigger: {
                  trigger: pillsRow,
                  start: 'top 88%',
                  toggleActions: 'play none none none',
                },
              },
            );
          }
        }, el);

        this.destroyRef.onDestroy(() => {
          ctx.revert();
          cleanups.forEach((c) => c());
        });
      } else {
        this.destroyRef.onDestroy(() => cleanups.forEach((c) => c()));
      }
    });
  }
}
