import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TechLogoComponent } from './tech-logo.component';

/**
 * A row of {@link TechLogoComponent} marks. `scroll` renders an edge-faded
 * marquee (the list is duplicated so the loop is seamless); `grid` renders a
 * centred wrap. Purely decorative reinforcement of the stack already listed in
 * text nearby, so the whole cloud is `aria-hidden`. Under reduced motion the
 * marquee falls back to a static centred wrap. `colored` (on by default) tints
 * each mark in its tech's brand hue.
 */
@Component({
  selector: 'app-tech-logo-cloud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechLogoComponent],
  styleUrl: './tech-logo-cloud.component.scss',
  template: `
    <div class="cloud" [class.is-scroll]="layout() === 'scroll'" aria-hidden="true">
      <div class="track">
        @for (n of names(); track $index) {
          <app-tech-logo [name]="n" [colored]="colored()" />
        }
        @if (layout() === 'scroll') {
          @for (n of names(); track 'dup-' + $index) {
            <app-tech-logo [name]="n" [colored]="colored()" />
          }
        }
      </div>
    </div>
  `,
  host: {
    class: 'block',
  },
})
export class TechLogoCloudComponent {
  readonly names = input<string[]>([]);
  readonly layout = input<'scroll' | 'grid'>('scroll');
  readonly colored = input(true);
}
