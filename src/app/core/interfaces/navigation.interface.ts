/**
 * Navigation interfaces and types
 * Defines types for routing, navigation items, and link configurations
 */

export interface NavigationItem {
  label: string;
  path: string;
  exact?: boolean;
}

export interface SectionNavigation {
  platform: string;
  agents: string;
  ecosystem: string;
  insights: string;
  access: string;
  home: string;
}

export interface RoutePaths {
  root: string;
  home: string;
  platform: string;
  agents: string;
  ecosystem: string;
  insights: string;
  access: string;
  error: string;
  notFound: string;
}

export interface InternalLinks {
  startBuilding: string;
  launchApp: string;
  enterNetwork: string;
  requestAccess: string;
  deployAgent: string;
  exploreAgents: string;
  explorePlatform: string;
  readSignal: string;
  getTrustPrinciples: string;
  getTheEarlyAccess: string;
  platformAdvantage: string;
  backToHome: string;
  backToCommandCenter: string;
  scrollExplore: string;
}

export interface ExternalLinks {
  github: string;
}

export interface AnchorLinks {
  top: string;
  platformOverview: string;
  agents: string;
  ecosystem: string;
  insights: string;
  contact: string;
  read: string;
}

export interface ScrollConfig {
  topOffset: number;
  smoothBehavior: boolean;
}
