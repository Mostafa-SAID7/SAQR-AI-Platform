import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SAQR_ICONS } from '../../../shared/icons/saqr-icons';
import { ProductLayout } from '../layout/product-layout';

@Component({
  selector: 'app-agents-page',
  imports: [RouterLink, ProductLayout, ...SAQR_ICONS],
  templateUrl: './agents-page.html',
})
export class AgentsPage {}
