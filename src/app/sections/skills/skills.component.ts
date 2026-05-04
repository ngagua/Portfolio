import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skills } from '../../shared/data/profile';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScrollDirective],
  template: `
    <section class="container-x section" id="skills">
      <header class="skills-head" appReveal>
        <p class="eyebrow" i18n>Toolkit</p>
        <h2 class="section-title" i18n>The stack I reach for.</h2>
        <p class="section-lead" i18n>
          Picked over years on real projects — front-end frameworks, back-end services, CMS, and the
          tooling that ties them together.
        </p>
      </header>

      <div class="skill-grid">
        @for (group of groups; track group.label; let i = $index) {
          <article class="skill-card" appReveal [appRevealDelay]="i * 0.08">
            <h3 class="skill-label">{{ group.label }}</h3>
            <ul class="skill-chips">
              @for (item of group.items; track item) {
                <li class="chip">{{ item }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly groups = skills;
}
