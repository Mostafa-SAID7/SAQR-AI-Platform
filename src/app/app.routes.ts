import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page';
import { AccessPage } from './features/product/pages/access-page';
import { AgentsPage } from './features/product/pages/agents-page';
import { EcosystemPage } from './features/product/pages/ecosystem-page';
import { InsightsPage } from './features/product/pages/insights-page';
import { PlatformPage } from './features/product/pages/platform-page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Nexus AI — Intelligence for the open internet' },
  {
    path: 'platform',
    component: PlatformPage,
    title: 'Platform — Nexus AI',
  },
  {
    path: 'agents',
    component: AgentsPage,
    title: 'AI Agents — Nexus AI',
  },
  {
    path: 'ecosystem',
    component: EcosystemPage,
    title: 'Ecosystem — Nexus AI',
  },
  {
    path: 'insights',
    component: InsightsPage,
    title: 'Insights — Nexus AI',
  },
  {
    path: 'access',
    component: AccessPage,
    title: 'Request access — Nexus AI',
  },
  { path: '**', redirectTo: '' },
];
