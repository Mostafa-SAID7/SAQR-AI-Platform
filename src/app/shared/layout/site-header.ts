import { Component, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SITE_NAVIGATION } from '../../core/data/navigation.data';
import { ThemeService } from '../../core/services/theme.service';
import { SAQR_ICONS } from '../icons/saqr-icons';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, ...SAQR_ICONS],
  templateUrl: './site-header.html',
})
export class SiteHeader {
  protected readonly theme = inject(ThemeService);
  protected readonly navigation = SITE_NAVIGATION;
  readonly activePage = input<string | null>(null);
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
