import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SAQR_ICONS } from '../../../shared/icons/saqr-icons';
import { ProductLayout } from '../../product/layout/product-layout';

@Component({
  selector: 'app-error-page',
  imports: [RouterLink, ProductLayout, ...SAQR_ICONS],
  templateUrl: './error-page.html',
})
export class ErrorPage {}