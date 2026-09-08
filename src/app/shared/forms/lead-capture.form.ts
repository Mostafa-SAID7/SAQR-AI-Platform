import { NonNullableFormBuilder, Validators } from '@angular/forms';

export function createLeadCaptureForm(formBuilder: NonNullableFormBuilder) {
  return formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
  });
}

export function createAccessRequestForm(formBuilder: NonNullableFormBuilder) {
  return formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
  });
}
