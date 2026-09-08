import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';
import { ProductLayout } from '../layout/product-layout';

@Component({
  selector: 'app-agents-page',
  imports: [RouterLink, ProductLayout, ...NEXUS_ICONS],
  templateUrl: './agents-page.html',
})
export class AgentsPage {}