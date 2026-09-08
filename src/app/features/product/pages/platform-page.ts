import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SAQR_ICONS } from '../../../shared/icons/saqr-icons';
import { ProductLayout } from '../layout/product-layout';

@Component({
  selector: 'app-platform-page',
  imports: [RouterLink, ProductLayout, ...SAQR_ICONS],
  templateUrl: './platform-page.html',
})
export class PlatformPage {}