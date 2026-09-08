/**
 * Centralized AI Agents data
 * Contains all agent definitions with metadata, descriptions, and references
 */

import type { Agent, AgentsSectionMetadata } from '../interfaces/agents.interface';

export const SAQR_AGENTS: Record<string, Agent> = {
  rassed: {
    id: 'rassed',
    name: 'RASSED',
    arabicName: 'رصد',
    arabicMeaning: 'Monitoring / Observation',
    order: 1,
    type: 'Intelligence',
    shortDescription: 'Market intelligence that never blinks.',
    fullDescription: 'Finds the edge before it becomes consensus.',
    icon: 'brain',
    imagePath: '/images/saqr-agent-rassed.jpg',
    color: {
      bg: '#152614',
      accent: '#b9fa62',
      text: '#d9ffa6',
    },
  },
  
  hares: {
    id: 'hares',
    name: 'HARES',
    arabicName: 'حارس',
    arabicMeaning: 'Guardian',
    order: 2,
    type: 'Protection',
    shortDescription: 'Risk monitoring built for a fast-moving region.',
    fullDescription: 'Monitors risk across every position and protocol.',
    icon: 'shield',
    imagePath: '/images/saqr-agent-hares.jpg',
    color: {
      bg: '#262041',
      accent: '#b289ff',
      text: '#b289ff',
    },
  },
  
  kimiya: {
    id: 'kimiya',
    name: 'KIMIYA',
    arabicName: 'كيمياء',
    arabicMeaning: 'Alchemy / Transformation',
    order: 3,
    type: 'Execution',
    shortDescription: 'Turning ambition into on-chain reality.',
    fullDescription: 'Transforms a thesis into an on-chain strategy.',
    icon: 'sparkles',
    imagePath: '/images/saqr-agent-kimiya.jpg',
    color: {
      bg: '#123642',
      accent: '#80e8ff',
      text: '#80e8ff',
    },
  },
};

export const AGENTS_ARRAY = Object.values(SAQR_AGENTS).sort((a, b) => a.order - b.order);

export const AGENTS_SECTION = {
  badge: '02 / AI Agents',
  heading: 'Meet the minds that never miss a signal.',
  description: 'Deploy specialized agents that never sleep, never miss an opportunity, and get smarter with every transaction.',
} as const;
