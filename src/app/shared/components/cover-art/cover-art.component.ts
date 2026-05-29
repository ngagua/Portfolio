import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  GradientMeshComponent,
  MeshAspect,
  MeshVariant,
} from '../gradient-mesh/gradient-mesh.component';

/**
 * Signature abstract visual: a {@link GradientMeshComponent} backdrop overlaid
 * with hand-authored topology lines and an aurora rim light. Used for the hero
 * right panel and case-study headers.
 *
 * The topology drift only runs when `animated` is true; parents leave it false
 * for SSR and flip it on after hydration via an `afterNextRender` signal, so
 * server and client render identical DOM (animation is CSS-only). Decorative.
 */
@Component({
  selector: 'app-cover-art',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GradientMeshComponent],
  styleUrl: './cover-art.component.scss',
  template: `
    <app-gradient-mesh class="mesh-layer" [variant]="variant()" />

    <svg
      class="topo"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path class="t t1" d="M-10 70 C 70 30 150 110 230 70 S 380 30 430 80" />
      <path class="t t2" d="M-10 130 C 80 90 160 170 250 120 S 390 90 430 140" />
      <path class="t t3" d="M-10 200 C 90 160 170 230 260 190 S 390 160 430 210" />
      <path class="t t4" d="M-10 255 C 100 225 185 285 275 245 S 405 220 430 262" />
    </svg>

    <span class="rim"></span>
  `,
  host: {
    'aria-hidden': 'true',
    '[class]': 'hostClass()',
  },
})
export class CoverArtComponent {
  readonly variant = input<MeshVariant>('default');
  readonly aspect = input<MeshAspect>('hero');
  readonly animated = input(false);

  protected readonly hostClass = computed(
    () => `cover-art aspect-${this.aspect()}${this.animated() ? ' is-animated' : ''}`,
  );
}
