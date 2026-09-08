import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE_NAVIGATION } from '../../core/data/navigation.data';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  protected readonly navigation = SITE_NAVIGATION;
}