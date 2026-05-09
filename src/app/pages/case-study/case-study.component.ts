import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { caseStudies } from '../../shared/data/case-studies';

@Component({
  selector: 'app-case-study',
  imports: [RouterLink],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyComponent {
  readonly slug = input.required<string>();

  private readonly router = inject(Router);

  protected readonly study = computed(
    () => caseStudies.find((c) => c.slug === this.slug()) ?? caseStudies[0],
  );

  constructor() {
    // Redirect away from unknown slugs as a side effect, not from inside the
    // computed - keeps `study` pure and avoids the navigateByUrl firing on
    // every signal read during change detection.
    effect(() => {
      const slug = this.slug();
      if (!caseStudies.some((c) => c.slug === slug)) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
