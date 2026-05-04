import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-header',
    role: 'banner',
  },
})
export class HeaderComponent {
  protected readonly monogram = profile.monogram;
  protected readonly menuOpen = signal(false);
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
}
