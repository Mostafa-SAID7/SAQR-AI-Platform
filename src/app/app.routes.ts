import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page';
import { AccessPage } from './features/product/pages/access-page';
import { AgentsPage } from './features/product/pages/agents-page';
import { EcosystemPage } from './features/product/pages/ecosystem-page';
import { InsightsPage } from './features/product/pages/insights-page';
import { PlatformPage } from './features/product/pages/platform-page';
import { ErrorPage } from './features/system/pages/error-page';
import { NotFoundPage } from './features/system/pages/not-found-page';

import { SAQR_BRANDING } from './core/data/branding.data';

export const routes: Routes = [
  { path: '', component: HomePage, title: SAQR_BRANDING.pageTitle.home },
  {
    path: 'platform',
    component: PlatformPage,
    title: SAQR_BRANDING.pageTitle.platform,
  },
  {
    path: 'agents',
    component: AgentsPage,
    title: SAQR_BRANDING.pageTitle.agents,
  },
  {
    path: 'ecosystem',
    component: EcosystemPage,
    title: SAQR_BRANDING.pageTitle.ecosystem,
  },
  {
    path: 'insights',
    component: InsightsPage,
    title: SAQR_BRANDING.pageTitle.insights,
  },
  {
    path: 'access',
    component: AccessPage,
    title: SAQR_BRANDING.pageTitle.access,
  },
  {
    path: 'error',
    component: ErrorPage,
    title: SAQR_BRANDING.pageTitle.error,
  },
  {
    path: '**',
    component: NotFoundPage,
    title: SAQR_BRANDING.pageTitle.notFound,
  },
];
