export interface SiteNavigationItem {
  readonly label: string;
  readonly path: string;
}

export const SITE_NAVIGATION: readonly SiteNavigationItem[] = [
  { label: 'Platform', path: '/platform' },
  { label: 'AI Agents', path: '/agents' },
  { label: 'Ecosystem', path: '/ecosystem' },
  { label: 'Insights', path: '/insights' },
];