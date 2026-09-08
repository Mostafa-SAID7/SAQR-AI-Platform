---
name: Tailwind theme tokens
description: Non-obvious Tailwind v4 theme behavior that affects utility generation.
---

When defining a Tailwind v4 `@theme`, removing all default tokens also removes utility scales such as spacing and positioning. Keep the defaults unless the project explicitly redefines every scale it uses.

**Why:** A reset theme can leave classes present in templates but visually ineffective, especially padding, gaps, and inset positioning, without producing a clear compiler error.

**How to apply:** Prefer additive custom color/font tokens in `src/styles.css`; only use a full theme reset when the replacement theme includes the spacing, radius, shadow, and layout tokens required by the templates.
