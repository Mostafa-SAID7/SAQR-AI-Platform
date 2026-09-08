import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import {
  isProductPageKey,
  ProductPageKey,
} from '../../../core/models/product-page.model';
import { SITE_NAVIGATION } from '../../../core/navigation/site-navigation';
import { ThemeService } from '../../../core/services/theme.service';
import { createAccessRequestForm } from '../../../shared/forms/lead-capture.form';
import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink, ReactiveFormsModule, ...NEXUS_ICONS],
  templateUrl: '../../../product-page.html',
})
export class ProductPage {
  private readonly route = inject(ActivatedRoute);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected readonly theme = inject(ThemeService);
  protected readonly navigation = SITE_NAVIGATION;
  protected readonly page: ProductPageKey = this.resolvePage();
  protected readonly menuOpen = signal(false);
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

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private resolvePage(): ProductPageKey {
    const page = this.route.snapshot.data['page'];
    return isProductPageKey(page) ? page : 'platform';
  }
}