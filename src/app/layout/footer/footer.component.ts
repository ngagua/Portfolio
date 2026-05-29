import { afterNextRender, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { profile, socials } from '../../shared/data/profile';
import { AuroraTextDirective } from '../../shared/directives/aurora-text.directive';

@Component({
  selector: 'app-footer',
  imports: [AuroraTextDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-footer',
    role: 'contentinfo',
  },
})
export class FooterComponent {
  protected readonly name = profile.name;
  protected readonly socials = socials;
  // Avoid `new Date()` during SSR (per CLAUDE.md); render a static fallback on
  // the server and update to the live year after hydration.
  protected readonly year = signal(2026);

  constructor() {
    afterNextRender(() => this.year.set(new Date().getFullYear()));
  }
}
