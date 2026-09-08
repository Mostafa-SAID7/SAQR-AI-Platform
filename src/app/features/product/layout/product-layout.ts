import { Component, input } from '@angular/core';

import { SiteFooter } from '../../../shared/layout/site-footer';
import { SiteHeader } from '../../../shared/layout/site-header';

@Component({
  selector: 'app-product-layout',
  imports: [SiteHeader, SiteFooter],
  templateUrl: './product-layout.html',
})
export class ProductLayout {
  readonly activePage = input('');
}