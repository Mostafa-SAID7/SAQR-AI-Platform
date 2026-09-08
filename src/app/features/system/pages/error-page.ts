import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NEXUS_ICONS } from '../../../shared/icons/nexus-icons';
import { ProductLayout } from '../../product/layout/product-layout';

@Component({
  selector: 'app-error-page',
  imports: [RouterLink, ProductLayout, ...NEXUS_ICONS],
  templateUrl: './error-page.html',
})
export class ErrorPage {}