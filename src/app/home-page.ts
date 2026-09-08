import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NEXUS_ICONS } from './nexus-icons';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, RouterLink, ...NEXUS_ICONS],
  templateUrl: './home-page.html',
})
export class HomePage {
  protected readonly theme = inject(ThemeService);
  protected contactForm: FormGroup;
  protected isSubmitting = signal(false);
  protected submitted = signal(false);
  protected menuOpen = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitted.set(true);
        this.contactForm.reset();
      }, 1000);
    }
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
