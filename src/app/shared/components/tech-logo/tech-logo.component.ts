import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type TechLogoName =
  | 'angular'
  | 'typescript'
  | 'java'
  | 'spring'
  | 'docker'
  | 'drupal'
  | 'git'
  | 'rxjs'
  | 'ngrx'
  | 'mysql';

/**
 * A single monochrome tech glyph drawn as inline SVG with `currentColor`,
 * matching the app's feather-style iconography (stroke 1.6, round caps). These
 * are original, uniform stylised marks - not the vendors' brand logos - which
 * keeps the set visually cohesive on the dark aurora field and avoids any
 * trademark concern. Decorative (`aria-hidden`); colour is driven by the host.
 */
@Component({
  selector: 'app-tech-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tech-logo.component.scss',
  template: `
    @switch (name()) {
      @case ('angular') {
        <svg viewBox="0 0 24 24">
          <path d="M12 3 4 6v6.2C4 16.6 7.6 19.6 12 21c4.4-1.4 8-4.4 8-8.8V6l-8-3Z" />
          <path d="M9 15.5 12 8l3 7.5M10.1 13.4h3.8" />
        </svg>
      }
      @case ('typescript') {
        <svg viewBox="0 0 24 24">
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <text x="12" y="15.7">TS</text>
        </svg>
      }
      @case ('java') {
        <svg viewBox="0 0 24 24">
          <path d="M5.5 10.5h11v3.2a4 4 0 0 1-4 4H9.5a4 4 0 0 1-4-4v-3.2Z" />
          <path d="M16.5 11.2h1.3a2.1 2.1 0 0 1 0 4.2h-1.3" />
          <path d="M9.5 4.2c-1 1 1 2 0 3.1M13 4.2c-1 1 1 2 0 3.1" />
        </svg>
      }
      @case ('spring') {
        <svg viewBox="0 0 24 24">
          <path d="M12 20.5V12" />
          <path d="M12 12c0-4.2 3.2-7.2 8-7.2.1 4.4-3.2 7.4-8 7.2Z" />
          <path d="M12 14.6C9.3 14.6 7 12.8 7 9.8c2.7 0 5 1.6 5 4.8Z" />
        </svg>
      }
      @case ('docker') {
        <svg viewBox="0 0 24 24">
          <path
            d="M4 11h3.4v3.4H4zM8 11h3.4v3.4H8zM12 11h3.4v3.4H12zM8 6.9h3.4v3.4H8z"
          />
          <path d="M3 16.8c2 1.4 5 1.4 7 0 2 1.4 6 1.6 8-1.4" />
        </svg>
      }
      @case ('drupal') {
        <svg viewBox="0 0 24 24">
          <path d="M12 3c3 4 6 5.8 6 10a6 6 0 0 1-12 0c0-4.2 3-6 6-10Z" />
        </svg>
      }
      @case ('git') {
        <svg viewBox="0 0 24 24">
          <circle cx="7" cy="5.5" r="2" />
          <circle cx="7" cy="18.5" r="2" />
          <circle cx="16.5" cy="9" r="2" />
          <path d="M7 7.5v9M7 11.5c0-1.7 1.4-2.5 3-2.5h2.5" />
        </svg>
      }
      @case ('rxjs') {
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <circle class="dot" cx="12" cy="4" r="1.4" />
        </svg>
      }
      @case ('ngrx') {
        <svg viewBox="0 0 24 24">
          <path d="M12 3l7 4.5v9L12 21l-7-4.5v-9L12 3Z" />
          <path d="M12 7l4 2.5v5L12 17l-4-2.5v-5L12 7Z" />
        </svg>
      }
      @case ('mysql') {
        <svg viewBox="0 0 24 24">
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        </svg>
      }
      @default {
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /></svg>
      }
    }
  `,
  host: {
    'aria-hidden': 'true',
    class: 'tech-logo',
    '[class.is-colored]': 'colored()',
    '[attr.data-slug]': 'name()',
  },
})
export class TechLogoComponent {
  readonly name = input<string>('');
  /** When true, tint the glyph in its tech's brand hue instead of mono. */
  readonly colored = input(false);
}
