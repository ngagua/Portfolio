import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { vitalityCase } from '../../shared/data/case-studies';

@Component({
  selector: 'app-case-study-vitality',
  imports: [RouterLink],
  templateUrl: './case-study-vitality.component.html',
  styleUrl: './case-study-vitality.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyVitalityComponent {
  protected readonly study = vitalityCase;
}
