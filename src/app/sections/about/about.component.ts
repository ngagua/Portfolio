import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../../shared/data/profile';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective],
  template: `
    <section class="container-x section about" id="about">
      <div class="about-grid">
        <header class="about-head" appReveal>
          <p class="eyebrow" i18n>About</p>
          <h2 class="section-title" i18n>
            Engineer who codes the front,
            <br />
            owns the back, and ships the whole.
          </h2>
        </header>

        <div class="about-body">
          @for (paragraph of bio; track $index) {
            <p appReveal [appRevealDelay]="$index * 0.1">{{ paragraph }}</p>
          }
        </div>
      </div>

      <ul class="stats" appReveal>
        <li>
          <span class="stat-num">3+</span>
          <span class="stat-label" i18n>Years contracting at Vitality Group</span>
        </li>
        <li>
          <span class="stat-num">12</span>
          <span class="stat-label" i18n>Years leading public-sector teams</span>
        </li>
        <li>
          <span class="stat-num">60</span>
          <span class="stat-label" i18n>People managed at peak</span>
        </li>
        <li>
          <span class="stat-num">3</span>
          <span class="stat-label" i18n>Languages spoken (EN · KA · RU)</span>
        </li>
      </ul>
    </section>
  `,
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly bio = profile.bio;
}
