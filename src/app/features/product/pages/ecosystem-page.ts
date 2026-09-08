import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';
import { ProductLayout } from '../layout/product-layout';

@Component({
  selector: 'app-ecosystem-page',
  imports: [RouterLink, ProductLayout, ...NEXUS_ICONS],
  templateUrl: './ecosystem-page.html',
})
export class EcosystemPage {}