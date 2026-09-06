---
name: Angular preview host configuration
description: Replit Preview host validation for Angular 21 dev servers.
---

Angular 21 projects need `allowedHosts: true` under the `serve` target options for Replit Preview to reach the dev server through its proxied hostname. The application builder's `security.allowedHosts` setting is separate and does not satisfy the dev-server host check.

**Why:** Replit Preview reaches the local Angular server through a proxy host that is not the server's local hostname; without the serve-level setting, the app returns a 400 host rejection even while the workflow is healthy.

**How to apply:** For Angular 21 apps using `@angular/build:dev-server`, configure the existing serve target with `options.allowedHosts: true`, then restart the workflow and confirm the preview plus browser logs.