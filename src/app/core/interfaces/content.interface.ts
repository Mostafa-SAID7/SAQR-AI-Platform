/**
 * Content interfaces and types
 * Defines types for page sections, cards, features, and text content
 */

export interface ContentSection {
  badge?: string;
  heading: string;
  subheading?: string;
  description?: string;
}

export interface StatCard {
  value: string;
  suffix: string;
  label: string;
  subLabel?: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  minLength?: number;
}

export interface PlatformSubsection {
  badge: string;
  heading: string;
  description: string;
}

export interface EcosystemNetworkInfo {
  heading: string;
  description: string;
  networkName: string;
}

export interface StatsCTAContent {
  heading: string;
  cta: string;
}

export interface PageDetails extends ContentSection {
  chartTitle?: string;
}

export interface InsightsPageContent {
  badge: string;
  heading: string;
  description: string;
  fieldNote: {
    title: string;
    description: string;
  };
  readMoreItems: string[];
}

export interface AgentsPageContent {
  badge: string;
  heading: string;
  description: string;
  subheading: string;
  subDescription: string;
  quote: string;
  quoteCitation: string;
}

export interface AccessPageContent extends ContentSection {
  chartTitle?: string;
}
