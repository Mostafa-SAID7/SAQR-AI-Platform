import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';
import { ProductLayout } from '../../product/layout/product-layout';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, ProductLayout, ...NEXUS_ICONS],
  templateUrl: './not-found-page.html',
})
export class NotFoundPage {}