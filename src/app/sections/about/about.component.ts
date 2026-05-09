import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../../shared/data/profile';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective, CountUpDirective],
  template: `
    <section id="about" class="container-x section">
      <div class="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <header class="lg:sticky lg:top-24" appReveal>
          <p class="eyebrow">About</p>
          <h2 class="section-title mt-4">
            Engineer who codes the front, owns the back, and ships the whole.
          </h2>
        </header>

        <div class="flex flex-col gap-5 text-[clamp(1rem,1.3vw,1.125rem)]">
          @for (paragraph of bio; track $index) {
            <p class="text-muted-foreground" appReveal [appRevealDelay]="$index * 0.1">
              {{ paragraph }}
            </p>
          }
        </div>
      </div>

      <ul class="stats-grid" appReveal>
        <li>
          <span class="stat-num" [appCountUp]="5" appCountUpSuffix="+">5+</span>
          <span class="stat-label">Years building production software</span>
        </li>
        <li>
          <span class="stat-num" [appCountUp]="10" appCountUpSuffix="+">10+</span>
          <span class="stat-label">Projects shipped end-to-end</span>
        </li>
        <li>
          <span class="stat-num" [appCountUp]="38">38</span>
          <span class="stat-label">Markets reached via Vitality</span>
        </li>
        <li>
          <span class="stat-num" [appCountUp]="27" appCountUpSuffix="M+">27M+</span>
          <span class="stat-label">Vitality members served</span>
        </li>
        <li>
          <span class="stat-num" [appCountUp]="1" appCountUpSuffix="M+">1M+</span>
          <span class="stat-label">Patients enrolled in NextGen CARES</span>
        </li>
        <li>
          <span class="stat-num" [appCountUp]="12">12</span>
          <span class="stat-label">Years leading public-sector teams</span>
        </li>
      </ul>
    </section>
  `,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly bio = profile.bio;
}
