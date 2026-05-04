import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="container-x section flex flex-col justify-center min-h-[70vh]">
      <p class="eyebrow">404</p>
      <h1 class="section-title mt-4">Lost in the void.</h1>
      <p class="section-lead">
        That page doesn't exist (or it never did). Let's get you back to safer ground.
      </p>
      <a class="btn btn-ghost self-start mt-8" routerLink="/">← Back to home</a>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
