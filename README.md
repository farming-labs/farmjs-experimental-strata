# Farm.js experimental Strata starter

A small Farm.js React Server Components starter for the automatic optimized-boundary experiment.
Application components stay ordinary JSX; enabling `experimental.optimizedBoundary` lets Farm route
eligible host-only server content through the native Strata renderer.

## Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## The experiment

The opt-in lives in `farm.config.ts`:

```ts
experimental: {
  serverComponents: true,
  optimizedBoundary: true,
}
```

That is the only application-level optimization API. Pages do not import `OptimizedBoundary`, build
a Strata document, or call the native renderer directly. Farm evaluates eligible host-element trees
on the server and keeps normal React rendering when a tree is small, interactive, or unsupported.

The counter in this starter is a Client Component. It demonstrates that React continues to own
interactive state while Farm can optimize the surrounding Server Component content.

## Production check

```bash
pnpm type-check
pnpm build
pnpm start
```

The current Strata runtime uses a native Node binding, so keep this experiment on Node deployments.
Edge and Cloudflare worker targets need a future Wasm or JavaScript fallback.

## Versions

This starter pins the tested RSC combination:

```text
@farm.js/core                 0.1.0-beta.23
@farm.js/cli                  0.1.0-beta.10
react                         ^19.0.0
react-dom                     ^19.0.0
```
