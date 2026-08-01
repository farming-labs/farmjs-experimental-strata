import type { Metadata } from "@farm.js/core";
import { FARM_VERSION } from "@farm.js/core/version";
import { ClientState } from "../components/client-state";

export const metadata: Metadata = {
  title: "Automatic rendering | Farm.js × Strata",
};

const renderingSteps = [
  {
    label: "01 / analyze",
    title: "Write ordinary JSX",
    description:
      "Farm inspects eligible host-only Server Component trees. There is no boundary component to import and no Strata document to maintain.",
  },
  {
    label: "02 / select",
    title: "Optimize safe content",
    description:
      "Large static regions are rendered by the native Strata runtime. Event handlers, refs, effects, and Client Components remain with React.",
  },
  {
    label: "03 / fallback",
    title: "Keep React semantics",
    description:
      "If a tree is too small or contains an unsupported value, Farm returns the original React element without changing application behavior.",
  },
] as const;

function RenderedArticle() {
  return (
    <article className="rendered-article" data-renderer="automatic">
      <header className="article-header">
        <p className="eyebrow">ordinary server component</p>
        <h2>One flag changes the representation, not your component API.</h2>
        <p>
          This article is standard React JSX. With the experimental flag enabled, Farm can select
          this host-only region for native rendering automatically.
        </p>
      </header>

      <div className="step-list">
        {renderingSteps.map((step) => (
          <section className="step" key={step.label}>
            <p className="step-label">{step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </section>
        ))}
      </div>

      <footer className="article-footer">
        <strong>Result:</strong> less React-owned interior work for content-heavy RSC regions, with
        a conservative fallback whenever Farm cannot prove eligibility.
      </footer>
    </article>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">farm.js v{FARM_VERSION} · experimental strata</p>
          <h1>Turn on the flag. Keep writing React.</h1>
          <p className="hero-description">
            Farm automatically applies the native rendering experiment to eligible Server Component
            content. No manual optimization boundary is required.
          </p>
          <div className="hero-links">
            <a href="https://farmjs.dev/docs/server-rendering" target="_blank" rel="noreferrer">
              Read the Farm.js docs <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/farming-labs/strata" target="_blank" rel="noreferrer">
              Explore Strata <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="config-panel" aria-label="Farm configuration example">
          <div className="panel-header">
            <span>farm.config.ts</span>
            <span className="panel-state">enabled</span>
          </div>
          <pre>
            <code>{`experimental: {
  serverComponents: true,
  optimizedBoundary: true,
}`}</code>
          </pre>
        </div>
      </section>

      <section className="demo-grid" aria-label="Rendering experiment">
        <RenderedArticle />
        <ClientState />
      </section>

      <section className="proof" aria-labelledby="proof-title">
        <p className="eyebrow">what this starter proves</p>
        <h2 id="proof-title">Application code stays application code.</h2>
        <div className="proof-grid">
          <p>
            <strong>No manual boundary</strong>
            The page imports no Strata renderer or optimization component.
          </p>
          <p>
            <strong>Safe fallback</strong>
            Unsupported trees continue through normal React rendering.
          </p>
          <p>
            <strong>Node experiment</strong>
            The current native runtime targets Node deployments.
          </p>
        </div>
      </section>
    </main>
  );
}
