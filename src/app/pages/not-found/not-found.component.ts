import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuroraBackgroundComponent } from '../../shared/components/aurora-background/aurora-background.component';
import { AuroraTextDirective } from '../../shared/directives/aurora-text.directive';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, AuroraBackgroundComponent, AuroraTextDirective],
  template: `
    <section class="container-x section flex flex-col justify-center min-h-[70vh] isolate">
      <app-aurora-background
        intensity="section"
        palette="blue-violet"
        [orbCount]="2"
        [showGrid]="false"
        [showBeams]="false"
      />
      <p class="eyebrow">404 — Deep space</p>
      <h1 class="section-title mt-4">Lost in <span appAuroraText>the void</span>.</h1>
      <p class="section-lead">
        That page doesn't exist (or it never did). Let's get you back to safer ground.
      </p>
      <a class="btn btn-ghost self-start mt-8" routerLink="/">← Back to home</a>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
