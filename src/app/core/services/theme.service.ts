import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type NexusTheme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'nexus-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isLight = signal(false);

  constructor() {
    const storedTheme = isPlatformBrowser(this.platformId)
      ? window.localStorage.getItem(THEME_STORAGE_KEY)
      : null;

    this.setTheme(storedTheme === 'light' ? 'light' : 'dark', false);
  }

  toggle(): void {
    this.setTheme(this.isLight() ? 'dark' : 'light');
  }

  private setTheme(theme: NexusTheme, persist = true): void {
    this.isLight.set(theme === 'light');
    this.document.documentElement.setAttribute('data-theme', theme);

    if (persist && isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }
}