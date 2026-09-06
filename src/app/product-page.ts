import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NEXUS_ICONS } from './nexus-icons';
import { ThemeService } from './theme.service';

type ProductPageKey = 'platform' | 'agents' | 'ecosystem' | 'insights' | 'access';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink, ReactiveFormsModule, ...NEXUS_ICONS],
  templateUrl: './product-page.html',
  styleUrls: ['./app.css', './product-page.css'],
})
export class ProductPage {
  protected readonly theme = inject(ThemeService);
  protected readonly page: ProductPageKey;
  protected menuOpen = signal(false);
  protected submitted = signal(false);
  protected isSubmitting = signal(false);
  protected accessForm: FormGroup;

  constructor(route: ActivatedRoute, fb: FormBuilder) {
    this.page = (route.snapshot.data['page'] ?? 'platform') as ProductPageKey;
    this.accessForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
    });
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }

  requestAccess() {
    if (this.accessForm.valid) {
      this.isSubmitting.set(true);
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitted.set(true);
        this.accessForm.reset();
      }, 900);
    }
  }
}
