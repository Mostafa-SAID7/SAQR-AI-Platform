/**
 * Centralized content data
 * Contains all page sections, descriptions, and content blocks
 */

import type {
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
} from '../interfaces/content.interface';

// Hero Section
export const HERO_SECTION: ContentSection = {
  badge: 'The intelligence layer for the next generation of builders',
  heading: 'See what\'s next.',
  description: 'SAQR turns complex on-chain data into decisive action. Sharp intelligence built for builders moving fast in Web3.',
};

// Platform Section
export const PLATFORM_SECTION: ContentSection = {
  badge: '01 / Platform',
  heading: 'Sharper vision. Faster action. Infinite possibilities.',
  description: 'Move at the speed of the market. SAQR gives your team the context, automation, and clarity to turn raw blockchain activity into competitive advantage.',
};

export const PLATFORM_SUBSECTION = {
  badge: '01 / Signal',
  heading: 'See the signal inside the noise.',
  description: 'Connect your data sources once. SAQR continuously scans markets, communities, protocols, and transactions to surface the moments that matter.',
};

export const PLATFORM_FEATURES: Feature[] = [
  {
    title: 'Unified data layer',
    description: 'Unified data layer',
  },
  {
    title: 'Real-time intelligence',
    description: 'Real-time intelligence',
  },
  {
    title: 'Decision-ready context',
    description: 'Decision-ready context',
  },
];

export const PLATFORM_MOMENTUM: Feature[] = [
  {
    title: 'Command center',
    description: 'Watch every market move from one focused workspace.',
  },
  {
    title: 'Open by default',
    description: 'Bring your stack with first-class APIs and composable data.',
  },
  {
    title: 'Actionable output',
    description: 'Turn a signal into an automated decision in seconds.',
  },
];

// Ecosystem Section
export const ECOSYSTEM_SECTION: ContentSection = {
  badge: '03 / Ecosystem',
  heading: 'Open systems. Shared upside.',
  description: 'SAQR is designed to connect the builders, protocols, and communities moving the network forward.',
};

export const ECOSYSTEM_NETWORK = {
  heading: 'Everything connected.',
  description: 'From your first signal to your final execution, SAQR keeps the whole loop visible. Build alongside a network that gets more useful with every connection.',
  networkName: 'THE SAQR NETWORK',
};

export const ECOSYSTEM_TRUST = {
  heading: 'Private by design. Open when ready.',
  description: 'Your data belongs to you. Role-based access, encrypted connections, and transparent permissions keep every action accountable.',
};

// Insights / Stats Section
export const INSIGHTS_SECTION: ContentSection = {
  badge: '04 / By the numbers',
  heading: 'By the numbers',
};

export const STATS_CARDS: StatCard[] = [
  {
    value: '14.8',
    suffix: 'M',
    label: 'Signals processed',
    subLabel: 'every day',
  },
  {
    value: '99.9',
    suffix: '%',
    label: 'Network uptime',
    subLabel: 'guaranteed',
  },
  {
    value: '02',
    suffix: 's',
    label: 'Average insight',
    subLabel: 'delivery time',
  },
];

export const STATS_CTA = {
  heading: 'Sharp signals never wait. Neither should you.',
  cta: 'Read the signal',
};

// Get Started / Contact Section
export const GET_STARTED_SECTION: ContentSection = {
  badge: '05 / Get started',
  heading: 'Your next move is now.',
  description: 'Join the early access network and see what\'s possible when sharp intelligence meets the open internet.',
};

export const GET_STARTED_SUCCESS = {
  heading: 'You\'re on the list.',
  description: 'We\'ll be in touch with your access details soon.',
};

// Not Found Page
export const NOT_FOUND_PAGE: ContentSection = {
  heading: 'Signal lost.',
  description: 'This route is outside the current network. Return to the command center or continue exploring the SAQR intelligence layer.',
};

// Platform Page specifics
export const PLATFORM_PAGE = {
  badge: '01 / Platform',
  heading: 'Intelligence in motion.',
  description: 'One command center for every signal, strategy, and smart action across the open network.',
  chartTitle: 'Overview / all networks',
};

// Insights Page specifics
export const INSIGHTS_PAGE = {
  badge: '04 / Insights',
  heading: 'Signal over speculation.',
  description: 'Ideas, frameworks, and field notes from the people building at the edge of the network.',
  fieldNote: {
    title: 'The new interface is intelligence.',
    description: 'Why the next generation of Web3 products will be defined by the quality of their context, not the number of features on the screen.',
  },
  readMoreItems: [
    'From dashboard to decision system',
    'What builders can learn from liquidity',
    'The rise of the autonomous operator',
  ],
};

// Agents Page specifics
export const AGENTS_PAGE = {
  badge: '02 / AI Agents',
  heading: 'Your team at machine speed.',
  description: 'Specialized intelligence that learns your context, watches the network, and acts with permission.',
  subheading: 'Choose your point of view.',
  subDescription: 'Every agent is purpose-built. Combine them to create a decision system that feels like your unfair advantage.',
  quote: 'The best interface is the one that gives you the answer before you know the question.',
  quoteCitation: 'SAQR / Agent principle 001',
};

// Access Page specifics
export const ACCESS_PAGE = {
  badge: '05 / Request early access',
  heading: 'Your next move is now.',
  description: 'Join the early access network and see what\'s possible when sharp intelligence meets the open internet.',
};

export const ACCESS_FORM_FIELDS = [
  {
    name: 'name',
    label: 'Your name',
    placeholder: 'Faisal Al-Qahtani',
    type: 'text',
    required: true,
    minLength: 2,
  },
  {
    name: 'email',
    label: 'Work email',
    placeholder: 'you@company.xyz',
    type: 'email',
    required: true,
  },
  {
    name: 'company',
    label: 'Company / project',
    placeholder: 'SAQR Labs',
    type: 'text',
    required: true,
  },
];
