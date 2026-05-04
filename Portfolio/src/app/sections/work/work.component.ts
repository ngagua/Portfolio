import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { vitalityCase } from '../../shared/data/case-studies';
import { projects } from '../../shared/data/projects';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-work',
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  protected readonly featured = vitalityCase;
  protected readonly projects = projects;
}
