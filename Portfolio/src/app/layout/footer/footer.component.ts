import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile, socials } from '../../shared/data/profile';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-footer',
    role: 'contentinfo',
  },
})
export class FooterComponent {
  protected readonly name = profile.name;
  protected readonly socials = socials;
  protected readonly year = new Date().getFullYear();
}
