import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { createLeadCaptureForm } from '../../../shared/forms/lead-capture.form';
import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';
import { SiteFooter } from '../../../shared/layout/site-footer';
import { SiteHeader } from '../../../shared/layout/site-header';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, RouterLink, SiteHeader, SiteFooter, ...NEXUS_ICONS],
  templateUrl: '../../../home-page.html',
})
export class HomePage {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected readonly contactForm = createLeadCaptureForm(this.formBuilder);
  protected readonly isSubmitting = signal(false);
  protected readonly submitted = signal(false);

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

}