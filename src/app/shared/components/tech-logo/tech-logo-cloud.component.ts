import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TechLogoComponent } from './tech-logo.component';

/**
 * A row of {@link TechLogoComponent} marks. `scroll` renders an edge-faded
 * marquee (the list is repeated so the loop is seamless); `grid` renders a
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
      <div class="track" [style.--copies]="copies().length">
        @for (c of copies(); track $index) {
          <div class="track-copy">
            @for (n of names(); track $index) {
              <app-tech-logo [name]="n" [colored]="colored()" />
            }
          </div>
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

  // One list copy ≈ 760px; the cloud is capped by container-x (~1120px wide).
  // 3 copies make one copy (a third of the track) always exceed the container,
  // so translateX(-100%/3) loops with no trailing gap. Grid renders a single copy.
  protected readonly copies = computed(() =>
    Array.from({ length: this.layout() === 'scroll' ? 3 : 1 }),
  );
}
