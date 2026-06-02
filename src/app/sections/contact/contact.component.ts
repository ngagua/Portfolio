import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { profile, socials } from '../../shared/data/profile';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdwnnpd';

type Status = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly email = profile.email;
  protected readonly socials = socials;
  protected readonly status = signal<Status>('idle');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    // Honeypot: bots fill this hidden field, humans don't. Formspree drops those.
    _gotcha: [''],
  });

  protected submit(): void {
    if (this.form.invalid || this.status() === 'submitting') {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('submitting');

    this.http
      .post(
        FORMSPREE_ENDPOINT,
        { ...this.form.getRawValue(), _subject: 'New message from your portfolio' },
        { headers: { Accept: 'application/json' } },
      )
      .subscribe({
        next: () => {
          this.status.set('success');
          this.form.reset();
        },
        error: () => this.status.set('error'),
      });
  }
}
