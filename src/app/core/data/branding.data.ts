/**
 * Centralized SAQR branding data
 * Contains all brand-related constants, metadata, and messaging
 */

import type { SaqrBrandingStructure } from '../interfaces/branding.interface';

export const SAQR_BRANDING: SaqrBrandingStructure = {
  // Brand identity
  name: 'SAQR',
  fullName: 'SAQR.AI',
  tagline: "See what's next.",

  // Brand messaging
  hero: {
    badge: 'The intelligence layer for the next generation of builders',
    heading: "See what's next.",
    description:
      'SAQR turns complex on-chain data into decisive action. Sharp intelligence built for builders moving fast in Web3.',
  },

  // Platform messaging
  platform: {
    heading: 'Sharper vision. Faster action. Infinite possibilities.',
    description:
      'Move at the speed of the market. SAQR gives your team the context, automation, and clarity to turn raw blockchain activity into competitive advantage.',
  },

  // Ecosystem messaging
  ecosystem: {
    heading: 'Built for the ambition of builders moving fast.',
    description:
      'The future belongs to those who move first. SAQR brings every signal into sharp focus so you can make the move before it becomes obvious.',
    networkName: 'THE SAQR NETWORK',
  },

  // Footer messaging
  footer: {
    tagline: 'Sharper signals for the builders of tomorrow.',
    copyright: '© 2026 SAQR',
  },

  // Meta tags
  meta: {
    title: 'SAQR — Intelligence for the next Web3 era',
    description:
      'SAQR turns complex on-chain data into decisive action. Sharp intelligence built for the next generation of Web3 builders.',
    themeColor: '#0b0d0c',
  },

  // Page titles
  pageTitle: {
    home: 'SAQR — Intelligence for the next Web3 era',
    platform: 'Platform — SAQR',
    agents: 'AI Agents — SAQR',
    ecosystem: 'Ecosystem — SAQR',
    insights: 'Insights — SAQR',
    access: 'Request access — SAQR',
    error: 'System error — SAQR',
    notFound: 'Page not found — SAQR',
  },

  // Brand colors
  colors: {
    accent: '#b9fa62', // acid green
    accentHover: '#a8e94a',
  },

  // Trust/Partner placeholder names (non-real companies)
  trustPartners: ['WASL', 'QIMAAM', 'SAHM', 'nour∆'],

  // Contact form placeholder
  contactForm: {
    nameLabel: 'Your name',
    namePlaceholder: 'Faisal Al-Qahtani',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@company.xyz',
    companyLabel: 'Company / project',
    companyPlaceholder: 'SAQR Labs',
  },

  // CTA labels
  cta: {
    startBuilding: 'Start building',
    launchApp: 'Launch app',
    enterNetwork: 'Enter the network',
    requestAccess: 'Request access',
    deployAgent: 'Deploy an agent',
  },
};
