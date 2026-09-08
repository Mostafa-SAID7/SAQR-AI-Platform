/**
 * Centralized interfaces barrel export
 * Re-exports all interfaces from dedicated files for convenient importing
 */

// Branding interfaces
export type {
  BrandIdentity,
  HeroMessaging,
  SectionMessaging,
  PlatformMessaging,
  EcosystemMessaging,
  FooterMessaging,
  MetaTags,
  PageTitles,
  BrandColors,
  ContactFormLabels,
  CTALabels,
  SaqrBrandingStructure,
  SaqrBranding,
} from './branding.interface';

// Agent interfaces
export type {
  AgentColor,
  Agent,
  AgentsSectionMetadata,
} from './agents.interface';

// Navigation interfaces
export type {
  NavigationItem,
  SectionNavigation,
  RoutePaths,
  InternalLinks,
  ExternalLinks,
  AnchorLinks,
  ScrollConfig,
} from './navigation.interface';

// Content interfaces
export type {
  ContentSection,
  StatCard,
  Feature,
  FormField,
  PlatformSubsection,
  EcosystemNetworkInfo,
  StatsCTAContent,
  PageDetails,
  InsightsPageContent,
  AgentsPageContent,
  AccessPageContent,
} from './content.interface';

// Image interfaces
export type {
  ImageAsset,
  ImageLoadingStrategy,
  BackgroundImageSet,
  ThemeBackgroundImages,
} from './images.interface';
