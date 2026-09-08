import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { createLeadCaptureForm } from '../../../shared/forms/lead-capture.form';
import { SAQR_ICONS } from '../../../shared/icons/saqr-icons';
import { SiteFooter } from '../../../shared/layout/site-footer';
import { SiteHeader } from '../../../shared/layout/site-header';

// Centralized data imports
import { SAQR_BRANDING } from '../../../core/data/branding.data';
import { AGENTS_ARRAY, AGENTS_SECTION } from '../../../core/data/agents.data';
import { INTERNAL_LINKS } from '../../../core/data/navigation.data';
import {
  HERO_SECTION,
  PLATFORM_SECTION,
  PLATFORM_SUBSECTION,
  PLATFORM_FEATURES,
  PLATFORM_MOMENTUM,
  ECOSYSTEM_SECTION,
  ECOSYSTEM_NETWORK,
  INSIGHTS_SECTION,
  STATS_CARDS,
  STATS_CTA,
  GET_STARTED_SECTION,
  GET_STARTED_SUCCESS,
} from '../../../core/data/content.data';
import { IMAGE_PATHS } from '../../../core/data/images.data';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, RouterLink, SiteHeader, SiteFooter, ...SAQR_ICONS],
  templateUrl: '../../../home-page.html',
})
export class HomePage {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  // Expose data to template
  protected readonly branding = SAQR_BRANDING;
  protected readonly agents = AGENTS_ARRAY;
  protected readonly agentsSection = AGENTS_SECTION;
  protected readonly heroSection = HERO_SECTION;
  protected readonly platformSection = PLATFORM_SECTION;
  protected readonly platformSubsection = PLATFORM_SUBSECTION;
  protected readonly platformFeatures = PLATFORM_FEATURES;
  protected readonly platformMomentum = PLATFORM_MOMENTUM;
  protected readonly ecosystemSection = ECOSYSTEM_SECTION;
  protected readonly ecosystemNetwork = ECOSYSTEM_NETWORK;
  protected readonly insightsSection = INSIGHTS_SECTION;
  protected readonly statsCards = STATS_CARDS;
  protected readonly statsCta = STATS_CTA;
  protected readonly getStartedSection = GET_STARTED_SECTION;
  protected readonly getStartedSuccess = GET_STARTED_SUCCESS;
  protected readonly images = IMAGE_PATHS;
  protected readonly internalLinks = INTERNAL_LINKS;

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