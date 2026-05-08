import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface NowEntry {
  client: string;
  role: string;
  context: string;
  href: string;
}

@Component({
  selector: 'app-now',
  imports: [RevealOnScrollDirective],
  templateUrl: './now.component.html',
  styleUrl: './now.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NowComponent {
  protected readonly entries: NowEntry[] = [
    {
      client: 'NextGen CARES',
      role: 'Senior Full-Stack Developer',
      context: 'Re-Software · Emory CARES Program',
      href: 'https://mycares.net/nextGen',
    },
    {
      client: 'Vitality',
      role: 'Angular + Spring Boot Developer',
      context: 'Omedia · global wellness platform',
      href: 'https://www.powerofvitality.com',
    },
  ];
}
