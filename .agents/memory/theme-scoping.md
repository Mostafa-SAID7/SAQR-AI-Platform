---
name: Theme selector scoping
description: Root data-theme selectors must be global when themed elements belong to Angular component templates.
---

Angular component styles are attribute-scoped, so selectors such as `html[data-theme='light'] .hero` inside a component stylesheet cannot match the unscoped root html element. Keep cross-route theme rules in the global stylesheet and use semantic tokens for surfaces, text, borders, controls, and focus rings.

**Why:** Component-local light-mode rules appeared correct in source but left hero and routed page surfaces in the dark palette.

**How to apply:** Put root-attribute theme selectors in the global stylesheet; keep component styles for structure and token-based defaults.