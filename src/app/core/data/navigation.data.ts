/**
 * Centralized navigation data
 * Contains site navigation, routing configuration, and link definitions
 */

import type {
  NavigationItem,
  SectionNavigation,
  RoutePaths,
  InternalLinks,
  ExternalLinks,
  AnchorLinks,
  ScrollConfig,
} from '../interfaces/navigation.interface';

export const SITE_NAVIGATION: NavigationItem[] = [
  {
    label: 'Platform',
    path: '/platform',
  },
  {
    label: 'AI Agents',
    path: '/agents',
  },
  {
    label: 'Ecosystem',
    path: '/ecosystem',
  },
  {
    label: 'Insights',
    path: '/insights',
  },
];

export const FOOTER_NAVIGATION: NavigationItem[] = [...SITE_NAVIGATION];

export const SECTION_NAVIGATION = {
  platform: '/platform',
  agents: '/agents',
  ecosystem: '/ecosystem',
  insights: '/insights',
  access: '/access',
  home: '/',
} as const;

export const ROUTE_PATHS = {
  root: '',
  home: '/',
  platform: '/platform',
  agents: '/agents',
  ecosystem: '/ecosystem',
  insights: '/insights',
  access: '/access',
  error: '/error',
  notFound: '**',
} as const;

export const INTERNAL_LINKS = {
  startBuilding: '/access',
  launchApp: '/access',
  enterNetwork: '/ecosystem',
  requestAccess: '/access',
  deployAgent: '/access',
  exploreAgents: '/agents',
  explorePlatform: '/platform',
  readSignal: '/insights',
  getTrustPrinciples: '/ecosystem',
  getTheEarlyAccess: '/access',
  platformAdvantage: '/platform',
  backToHome: '/',
  backToCommandCenter: '/',
  scrollExplore: '#platform-overview',
} as const;

export const EXTERNAL_LINKS = {
  github: 'https://github.com/Mostafa-SAID7/lead-geny-F',
} as const;

/**
 * Anchor links for smooth scrolling within pages
 */
export const ANCHOR_LINKS = {
  top: '#top',
  platformOverview: '#platform-overview',
  agents: '#agents',
  ecosystem: '#ecosystem',
  insights: '#insights',
  contact: '#contact',
  read: '#read',
} as const;

/**
 * Scroll behavior configuration
 */
export const SCROLL_CONFIG = {
  topOffset: 80,
  smoothBehavior: true,
} as const;
