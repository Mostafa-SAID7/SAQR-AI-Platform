import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type NexusTheme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly isLight = signal(false);

  constructor() {
    const storedTheme = isPlatformBrowser(this.platformId)
      ? window.localStorage.getItem('nexus-theme')
      : null;
    this.setTheme(storedTheme === 'light' ? 'light' : 'dark', false);
  }

  toggle() {
    this.setTheme(this.isLight() ? 'dark' : 'light');
  }

  private setTheme(theme: NexusTheme, persist = true) {
    this.isLight.set(theme === 'light');
    this.document.querySelector('html')?.setAttribute('data-theme', theme);

    if (persist && isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('nexus-theme', theme);
    }
  }
}
