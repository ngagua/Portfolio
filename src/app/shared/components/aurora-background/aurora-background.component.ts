import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type AuroraIntensity = 'hero' | 'section' | 'subtle';
export type AuroraPalette = 'full' | 'blue-violet' | 'teal-violet';

/**
 * Reusable aurora backdrop - orbs, grid, beams, and a sparkle field rendered
 * purely with CSS (no canvas). Extracted from the hero so every section can
 * share the same signature motif at different intensities.
 *
 * Decorative by definition: the host is `aria-hidden`. Renders identically on
 * server and client (animations are CSS-only) and collapses to static frames
 * under `prefers-reduced-motion`. Place inside a positioned, `isolate`d parent;
 * it sits at `-z-10` behind the section content.
 */
@Component({
  selector: 'app-aurora-background',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './aurora-background.component.scss',
  template: `
    <div class="aurora">
      <span class="orb orb-a"></span>
      <span class="orb orb-b"></span>
      @if (orbCount() === 4) {
        <span class="orb orb-c"></span>
        <span class="orb orb-d"></span>
      }
    </div>

    @if (showGrid()) {
      <span class="grid"></span>
    }

    @if (showBeams()) {
      <span class="beam beam-a"></span>
      <span class="beam beam-b"></span>
    }

    @if (showSparkles()) {
      <div class="sparkles">
        <span class="sparkle s1"></span>
        <span class="sparkle s2"></span>
        <span class="sparkle s3"></span>
        <span class="sparkle s4"></span>
        <span class="sparkle s5"></span>
        <span class="sparkle s6"></span>
        <span class="sparkle s7"></span>
        <span class="sparkle s8"></span>
      </div>
    }
  `,
  host: {
    'aria-hidden': 'true',
    '[class]': 'hostClass()',
  },
})
export class AuroraBackgroundComponent {
  readonly intensity = input<AuroraIntensity>('section');
  readonly palette = input<AuroraPalette>('full');
  readonly orbCount = input<2 | 4>(4);
  readonly showGrid = input(true);
  readonly showBeams = input(true);
  readonly showSparkles = input(true);

  protected readonly hostClass = computed(
    () => `aurora-bg intensity-${this.intensity()} palette-${this.palette()}`,
  );
}
