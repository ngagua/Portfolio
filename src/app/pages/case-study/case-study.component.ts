import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
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

  protected readonly study = computed(() => {
    const found = caseStudies.find((c) => c.slug === this.slug());
    if (!found) {
      this.router.navigateByUrl('/');
    }
    return found ?? caseStudies[0];
  });
}
