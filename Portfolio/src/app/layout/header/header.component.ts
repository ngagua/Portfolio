import {
  ChangeDetectionStrategy,
  Component,
  inject,
  LOCALE_ID,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { profile } from '../../shared/data/profile';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-header',
    role: 'banner',
  },
})
export class HeaderComponent {
  private readonly locale = inject(LOCALE_ID);
  private readonly doc = inject(DOCUMENT);

  protected readonly monogram = profile.monogram;
  protected readonly menuOpen = signal(false);
  protected readonly currentLang = this.locale.startsWith('ka') ? 'ka' : 'en';
  protected readonly links: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected switchLang(target: 'en' | 'ka'): void {
    if (target === this.currentLang) {
      return;
    }
    const win = this.doc.defaultView;
    if (!win) return;

    const path = win.location.pathname.replace(/^\/(en-US|ka)(?=\/|$)/, '');
    const next = target === 'en' ? `/en-US${path || '/'}` : `/ka${path || '/'}`;
    win.location.assign(next);
  }
}
