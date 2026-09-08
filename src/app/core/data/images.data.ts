/**
 * Centralized image paths data
 * Contains all image references and asset paths
 */

import type {
  ImageAsset,
  ImageLoadingStrategy,
  ThemeBackgroundImages,
} from '../interfaces/images.interface';

export const IMAGE_PATHS = {
  // Hero images
  hero: {
    intelligence: {
      path: '/images/saqr-hero-intelligence.jpg',
      alt: 'Abstract glowing intelligence network',
      fetchPriority: 'high' as const,
    },
  },

  // Agent images
  agents: {
    rassed: {
      path: '/images/saqr-agent-rassed.jpg',
      alt: 'RASSED agent visual',
      lazy: true,
    },
    hares: {
      path: '/images/saqr-agent-hares.jpg',
      alt: 'HARES agent visual',
      lazy: true,
    },
    kimiya: {
      path: '/images/saqr-agent-kimiya.jpg',
      alt: 'KIMIYA agent visual',
      lazy: true,
    },
  },

  // Section images
  sections: {
    ecosystem: {
      path: '/images/saqr-ecosystem-network.jpg',
      alt: 'SAQR ecosystem network',
      lazy: true,
    },
    insight: {
      path: '/images/saqr-insight-signal.jpg',
      alt: 'Abstract signal visualization',
      lazy: true,
    },
  },

  // Brand assets
  brand: {
    favicon: '/favicon.svg',
    faviconIco: '/favicon.ico',
  },
} as const;

/**
 * Get agent image by agent ID
 */
export function getAgentImage(agentId: string): ImageAsset {
  const imageMap: Record<string, ImageAsset> = {
    rassed: IMAGE_PATHS.agents.rassed,
    hares: IMAGE_PATHS.agents.hares,
    kimiya: IMAGE_PATHS.agents.kimiya,
  };
  
  return imageMap[agentId] || IMAGE_PATHS.agents.rassed;
}

/**
 * CSS background image URLs for theme variables
 */
export const BACKGROUND_IMAGES = {
  dark: {
    heroPlatform: `linear-gradient(90deg, #090d0bf7 8%, #090d0bd9 43%, #090d0b80 76%, #090d0bd9 100%), url('${IMAGE_PATHS.hero.intelligence.path}')`,
    heroAgents: `linear-gradient(90deg, #0b0d0ff7 8%, #0b0d0fd9 43%, #0b0d0f70 76%, #0b0d0fcf 100%), url('${IMAGE_PATHS.agents.rassed.path}')`,
    heroInsights: `linear-gradient(90deg, #090d0bf7 8%, #090d0bd9 43%, #090d0b78 76%, #090d0bd2 100%), url('${IMAGE_PATHS.sections.insight.path}')`,
    heroAccess: `linear-gradient(90deg, #090d0bf7 8%, #090d0bd9 43%, #090d0b72 76%, #090d0bd8 100%), url('${IMAGE_PATHS.sections.ecosystem.path}')`,
    heroEcosystem: `linear-gradient(90deg, #0b0f0ce8 8%, #0b0f0c90 58%, #0b0f0cbd), url('${IMAGE_PATHS.sections.ecosystem.path}')`,
  },
  light: {
    heroPlatform: `linear-gradient(90deg, #eef3e8f7 8%, #eef3e8df 43%, #eef3e8a8 76%, #eef3e8e8 100%), url('${IMAGE_PATHS.hero.intelligence.path}')`,
    heroAgents: `linear-gradient(90deg, #f1eef8f7 8%, #f1eef8df 43%, #f1eef8a8 76%, #f1eef8e8 100%), url('${IMAGE_PATHS.agents.rassed.path}')`,
    heroInsights: `linear-gradient(90deg, #eef3e8f7 8%, #eef3e8df 43%, #eef3e8a8 76%, #eef3e8e8 100%), url('${IMAGE_PATHS.sections.insight.path}')`,
    heroAccess: `linear-gradient(90deg, #eef3e8f7 8%, #eef3e8df 43%, #eef3e8a8 76%, #eef3e8e8 100%), url('${IMAGE_PATHS.sections.ecosystem.path}')`,
    heroEcosystem: `linear-gradient(90deg, #eef3e8f2 8%, #eef3e8c9 58%, #eef3e8dc), url('${IMAGE_PATHS.sections.ecosystem.path}')`,
  },
} as const;

/**
 * Image loading strategies
 */
export const IMAGE_LOADING = {
  eager: {
    loading: 'eager' as const,
    fetchPriority: 'high' as const,
  },
  lazy: {
    loading: 'lazy' as const,
    fetchPriority: 'auto' as const,
  },
} as const;
