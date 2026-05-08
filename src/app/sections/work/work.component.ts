import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudies } from '../../shared/data/case-studies';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-work',
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  protected readonly studies = caseStudies;
}
