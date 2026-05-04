import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-leadership',
  imports: [RevealOnScrollDirective],
  template: `
    <section class="container-x section" id="leadership">
      <div class="leadership-grid">
        <div class="leadership-text" appReveal>
          <p class="eyebrow" i18n>Before software</p>
          <h2 class="section-title" i18n>A decade of leading public-sector teams.</h2>
          <p class="section-lead" i18n>
            From 2010 to 2022, I served at the
            <strong>Georgia Revenue Service</strong>, holding several roles culminating in
            <strong>Deputy Head of Division</strong> for eight years. I led teams of up to
            <strong>60 people</strong> across multi-stakeholder projects with public and private
            partners — strategic planning, delivery oversight, and team growth.
          </p>
          <p class="section-lead" i18n>
            That background still shapes the way I work as an engineer: I scope before I code, write
            documentation that survives a hand-off, and keep the people who depend on the system in
            the picture.
          </p>
        </div>

        <ul class="leadership-list">
          <li appReveal [appRevealDelay]="0">
            <span class="li-num">01</span>
            <div>
              <h3 i18n>Strategic planning</h3>
              <p i18n>
                Translating broad objectives into concrete, measurable initiatives the team can
                execute on.
              </p>
            </div>
          </li>
          <li appReveal [appRevealDelay]="0.1">
            <span class="li-num">02</span>
            <div>
              <h3 i18n>Cross-functional delivery</h3>
              <p i18n>
                Coordinating projects with up to 60 contributors across public and private
                stakeholders.
              </p>
            </div>
          </li>
          <li appReveal [appRevealDelay]="0.2">
            <span class="li-num">03</span>
            <div>
              <h3 i18n>Team growth</h3>
              <p i18n>
                Mentoring, hiring, and shaping a culture where people grow into the next role.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrl: './leadership.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadershipComponent {}
