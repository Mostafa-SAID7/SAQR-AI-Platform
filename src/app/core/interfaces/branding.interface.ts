/**
 * Branding interfaces and types
 * Defines types for brand constants, messaging, and metadata
 */

export interface BrandIdentity {
  name: string;
  fullName: string;
  tagline: string;
}

export interface HeroMessaging {
  badge: string;
  heading: string;
  description: string;
}

export interface SectionMessaging {
  heading: string;
  description: string;
}

export interface PlatformMessaging extends SectionMessaging {}

export interface EcosystemMessaging extends SectionMessaging {
  networkName: string;
}

export interface FooterMessaging {
  tagline: string;
  copyright: string;
}

export interface MetaTags {
  title: string;
  description: string;
  themeColor: string;
}

export interface PageTitles {
  home: string;
  platform: string;
  agents: string;
  ecosystem: string;
  insights: string;
  access: string;
  error: string;
  notFound: string;
}

export interface BrandColors {
  accent: string;
  accentHover: string;
}

export interface ContactFormLabels {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
}

export interface CTALabels {
  startBuilding: string;
  launchApp: string;
  enterNetwork: string;
  requestAccess: string;
  deployAgent: string;
}

export interface SaqrBrandingStructure {
  name: string;
  fullName: string;
  tagline: string;
  hero: HeroMessaging;
  platform: PlatformMessaging;
  ecosystem: EcosystemMessaging;
  footer: FooterMessaging;
  meta: MetaTags;
  pageTitle: PageTitles;
  colors: BrandColors;
  trustPartners: string[];
  contactForm: ContactFormLabels;
  cta: CTALabels;
}

export type SaqrBranding = typeof SAQR_BRANDING;

// This will be imported from branding.data.ts after refactoring
declare const SAQR_BRANDING: SaqrBrandingStructure;
