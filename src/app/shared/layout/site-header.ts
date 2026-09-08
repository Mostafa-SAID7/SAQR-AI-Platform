import { Component, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SITE_NAVIGATION } from '../../core/navigation/site-navigation';
import { ThemeService } from '../../core/services/theme.service';
import { NEXUS_ICONS } from '../icons/nexus-icons';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, ...NEXUS_ICONS],
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