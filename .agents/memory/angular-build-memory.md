---
name: Angular build resource limits
description: Local Angular validation can compete with the managed preview workflow for memory.
---

Run one Angular build workload at a time. A manual AOT/template check can be
killed with exit 137 when it overlaps the managed `ng serve` workflow, even
when the workflow itself compiles and serves the application successfully.

**Why:** The Replit preview workflow already performs an Angular compilation;
parallel validation adds a second large compiler process and can exhaust the
container.

**How to apply:** Prefer the running workflow logs plus strict TypeScript checks
for routine verification. Restart the managed workflow once for final
compilation, and run a separate production build only when the extra check is
necessary.