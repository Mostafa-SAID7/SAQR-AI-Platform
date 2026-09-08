import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SaqrErrorHandler implements ErrorHandler {
  private readonly router = inject(Router);

  handleError(error: unknown): void {
    console.error(error);

    if (this.router.url !== '/error') {
      void this.router.navigateByUrl('/error');
    }
  }
}