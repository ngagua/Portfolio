import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="container-x section not-found">
      <p class="eyebrow" i18n>404</p>
      <h1 class="section-title" i18n>Lost in the void.</h1>
      <p class="section-lead" i18n>
        That page doesn't exist (or it never did). Let's get you back to safer ground.
      </p>
      <a class="cta-link" routerLink="/" i18n>← Back to home</a>
    </section>
  `,
  styles: `
    .not-found {
      min-height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .cta-link {
      margin-top: 2rem;
      align-self: flex-start;
      padding: 0.75rem 1.5rem;
      border-radius: 999px;
      border: 1px solid var(--color-border);
      color: var(--color-text);
      transition:
        border-color 0.2s ease,
        background 0.2s ease;
    }
    .cta-link:hover {
      border-color: var(--color-accent);
      background: var(--color-accent-soft);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
