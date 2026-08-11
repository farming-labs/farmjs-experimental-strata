import { FARM_VERSION } from "@farm.js/core/version";
import { ClientState } from "../components/client-state";
import { ResourceLinks } from "../components/resource-links";

export default function HomePage() {
  return (
    <main className="landing-main">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span>00</span>
            <span>FARMJS / Strata starter</span>
          </div>

          <h1>
            Native rendering. Ordinary <code>JSX</code>.
          </h1>

          <div className="command-list" aria-label="Starter details and client-state demo">
            <div className="command-row">
              <span>01</span>
              <code>pnpm dev</code>
            </div>
            <div className="command-row">
              <span>02</span>
              <code>FARMJS v{FARM_VERSION} / optimizedBoundary: true</code>
            </div>
            <ClientState />
          </div>

          <ResourceLinks className="resource-links" />
        </div>
      </section>
    </main>
  );
}
