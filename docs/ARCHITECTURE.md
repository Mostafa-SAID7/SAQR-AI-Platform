# Application architecture

This project uses a feature-oriented Angular structure. The goal is to keep
application-wide concerns stable while allowing product areas to grow without
turning `src/app` into a collection of unrelated files.

## Boundaries

```text
src/
├── main.ts                         # Browser bootstrap
├── main.server.ts                  # SSR bootstrap
└── app/
    ├── app.config.ts               # Browser providers
    ├── app.config.server.ts        # SSR provider composition
    ├── app.routes.ts               # Public route composition
    ├── app.routes.server.ts        # Server render modes
    ├── core/
    │   ├── layout/                 # Application shell
    │   ├── navigation/             # Site-wide navigation definitions
    │   └── services/               # Singleton application services
    ├── features/
    │   ├── home/pages/             # Home feature page
    │   └── product/
    │       ├── layout/             # Product route shell
    │       └── pages/              # Platform, agents, ecosystem, insights, access
    └── shared/
        ├── forms/                  # Reusable form composition and validators
        ├── icons/                  # Shared icon registration
        └── layout/                 # Site header and footer
```

## Dependency rules

1. **Bootstrap and routing compose the app; they do not own feature logic.**
2. **Core may be imported by features and shared code.** Core must not import a
   feature, preventing circular application dependencies.
3. **Features own page behavior.** A feature should not reach into another
   feature's private files.
4. **Shared contains reusable, product-agnostic building blocks.** It should
   not depend on route-specific page state.
5. **Cross-page values have one source of truth.** Navigation entries,
   validators, icons, and theme storage behavior are defined once and consumed
   by pages.

## Adding a new area

For a new user-facing area:

1. Create `src/app/features/<area>/`.
2. Keep its pages, components, data, and state inside that feature.
3. Promote a utility to `shared/` only when it is genuinely reusable and has no
   feature-specific meaning.
4. Promote a singleton concern to `core/` only when it is application-wide.
5. Register each public page in `app.routes.ts`; keep route behavior inside
   that page's feature folder.

Shared site chrome lives in `shared/layout`, while each feature page owns its
own template. This prevents layout markup, navigation state, and route-specific
content from being copied across pages.
