import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skills } from '../../shared/data/profile';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScrollDirective],
  template: `
    <section id="skills" class="container-x section">
      <header class="max-w-[60ch]" appReveal>
        <p class="eyebrow">Toolkit</p>
        <h2 class="section-title mt-4">The stack I reach for.</h2>
        <p class="section-lead">
          Picked over years on real projects — front-end frameworks, back-end services, CMS, and the
          tooling that ties them together.
        </p>
      </header>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        @for (group of groups; track group.label; let i = $index) {
          <article class="skill-card" appReveal [appRevealDelay]="i * 0.08">
            <h3 class="skill-label">{{ group.label }}</h3>
            <ul class="flex flex-wrap gap-2 list-none m-0 p-0">
              @for (item of group.items; track item) {
                <li class="chip">{{ item }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly groups = skills;
}
