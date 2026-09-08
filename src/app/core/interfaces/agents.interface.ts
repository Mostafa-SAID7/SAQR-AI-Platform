/**
 * Agent interfaces and types
 * Defines types for AI agents, their metadata, and configurations
 */

export interface AgentColor {
  bg: string;
  accent: string;
  text: string;
}

export interface Agent {
  id: string;
  name: string;
  arabicName: string;
  arabicMeaning: string;
  order: number;
  type: string;
  shortDescription: string;
  fullDescription: string;
  icon: 'brain' | 'shield' | 'sparkles';
  imagePath: string;
  color: AgentColor;
}

export interface AgentsSectionMetadata {
  badge: string;
  heading: string;
  description: string;
}
