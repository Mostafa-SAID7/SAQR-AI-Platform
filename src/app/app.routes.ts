import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page';
import { ProductPage } from './features/product/pages/product-page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Nexus AI — Intelligence for the open internet' },
  {
    path: 'platform',
    component: ProductPage,
    data: { page: 'platform' },
    title: 'Platform — Nexus AI',
  },
  {
    path: 'agents',
    component: ProductPage,
    data: { page: 'agents' },
    title: 'AI Agents — Nexus AI',
  },
  {
    path: 'ecosystem',
    component: ProductPage,
    data: { page: 'ecosystem' },
    title: 'Ecosystem — Nexus AI',
  },
  {
    path: 'insights',
    component: ProductPage,
    data: { page: 'insights' },
    title: 'Insights — Nexus AI',
  },
  {
    path: 'access',
    component: ProductPage,
    data: { page: 'access' },
    title: 'Request access — Nexus AI',
  },
  { path: '**', redirectTo: '' },
];
