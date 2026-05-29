import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type MeshVariant = 'default' | 'nextgen' | 'vitality' | 'omedia';
export type MeshAspect = 'hero' | 'square' | 'wide';

/**
 * Abstract generative cover art - layered radial/conic gradients plus a fine
 * CSS dot-grain, all rendered via `:host` pseudo-elements. No canvas, no SVG
 * filter, no image files: identical on server and client, zero runtime cost,
 * and no animation. Decorative (`aria-hidden`).
 */
@Component({
  selector: 'app-gradient-mesh',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './gradient-mesh.component.scss',
  template: '',
  host: {
    'aria-hidden': 'true',
    '[class]': 'hostClass()',
  },
})
export class GradientMeshComponent {
  readonly variant = input<MeshVariant>('default');
  readonly aspect = input<MeshAspect>('wide');

  protected readonly hostClass = computed(
    () => `mesh aspect-${this.aspect()} variant-${this.variant()}`,
  );
}
