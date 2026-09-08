import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SITE_NAVIGATION } from '../../../core/navigation/site-navigation';
import { ThemeService } from '../../../core/services/theme.service';
import { createLeadCaptureForm } from '../../../shared/forms/lead-capture.form';
import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, RouterLink, ...NEXUS_ICONS],
  templateUrl: '../../../home-page.html',
})
export class HomePage {
  protected readonly theme = inject(ThemeService);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected readonly navigation = SITE_NAVIGATION;
  protected readonly contactForm = createLeadCaptureForm(this.formBuilder);
  protected readonly isSubmitting = signal(false);
  protected readonly submitted = signal(false);
  protected readonly menuOpen = signal(false);

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitted.set(true);
      this.contactForm.reset();
    }, 1000);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}