import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface Pillar {
  num: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-leadership',
  imports: [RevealOnScrollDirective],
  template: `
    <section id="leadership" class="container-x section">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col gap-6" appReveal>
          <p class="eyebrow">Before software</p>
          <h2 class="section-title">A decade of leading public-sector teams.</h2>
          <p class="section-lead">
            From 2010 to 2022, I served at the
            <strong class="text-foreground font-semibold">Georgia Revenue Service</strong>, holding
            several roles culminating in
            <strong class="text-foreground font-semibold">Deputy Head of Division</strong>
            for eight years. I led teams of up to
            <strong class="text-foreground font-semibold">60 people</strong>
            across multi-stakeholder projects with public and private partners — strategic planning,
            delivery oversight, and team growth.
          </p>
          <p class="section-lead">
            That background still shapes the way I work as an engineer: I scope before I code, write
            documentation that survives a hand-off, and keep the people who depend on the system in
            the picture.
          </p>
        </div>

        <ul class="leadership-list">
          @for (pillar of pillars; track pillar.num; let i = $index) {
            <li appReveal [appRevealDelay]="i * 0.1">
              <span
                class="font-display font-medium text-primary text-sm tracking-[0.18em] pt-1"
              >
                {{ pillar.num }}
              </span>
              <div>
                <h3 class="font-display font-semibold text-lg text-foreground mb-1.5">
                  {{ pillar.title }}
                </h3>
                <p class="text-base">{{ pillar.body }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './leadership.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadershipComponent {
  protected readonly pillars: Pillar[] = [
    {
      num: '01',
      title: 'Strategic planning',
      body: 'Translating broad objectives into concrete, measurable initiatives the team can execute on.',
    },
    {
      num: '02',
      title: 'Cross-functional delivery',
      body: 'Coordinating projects with up to 60 contributors across public and private stakeholders.',
    },
    {
      num: '03',
      title: 'Team growth',
      body: 'Mentoring, hiring, and shaping a culture where people grow into the next role.',
    },
  ];
}
