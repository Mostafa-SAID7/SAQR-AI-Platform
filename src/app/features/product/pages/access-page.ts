import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { createAccessRequestForm } from '../../../shared/forms/lead-capture.form';
import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';
import { ProductLayout } from '../layout/product-layout';

@Component({
  selector: 'app-access-page',
  imports: [ReactiveFormsModule, ProductLayout, ...NEXUS_ICONS],
  templateUrl: './access-page.html',
})
export class AccessPage {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected readonly submitted = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly accessForm = createAccessRequestForm(this.formBuilder);

  requestAccess(): void {
    if (this.accessForm.invalid) {
      this.accessForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitted.set(true);
      this.accessForm.reset();
    }, 900);
  }
}