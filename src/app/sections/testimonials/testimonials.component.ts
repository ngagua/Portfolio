import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { testimonials } from '../../shared/data/testimonials';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-testimonials',
  imports: [RevealOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  protected readonly items = testimonials;
  protected readonly hasAny = computed(() => this.items.length > 0);
}
