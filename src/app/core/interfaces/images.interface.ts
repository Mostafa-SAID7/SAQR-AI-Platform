/**
 * Image interfaces and types
 * Defines types for image assets, loading strategies, and background images
 */

export interface ImageAsset {
  path: string;
  alt: string;
  lazy?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export interface ImageLoadingStrategy {
  loading: 'eager' | 'lazy';
  fetchPriority: 'high' | 'low' | 'auto';
}

export interface BackgroundImageSet {
  heroPlatform: string;
  heroAgents: string;
  heroInsights: string;
  heroAccess: string;
  heroEcosystem: string;
}

export interface ThemeBackgroundImages {
  dark: BackgroundImageSet;
  light: BackgroundImageSet;
}
