---
name: Feature boundaries
description: The app separates shared site chrome from independently routed feature pages.
---

Keep application chrome in shared layout components and keep route-specific
markup and behavior inside the owning feature page. Product areas should be
direct route components rather than one conditional template that switches on
route metadata.

**Why:** A conditional mega-template makes unrelated areas change together and
encourages duplicated navigation, form, and layout state.

**How to apply:** Add a page under the relevant feature, compose the shared
layout around it, and register that page directly in the route table.