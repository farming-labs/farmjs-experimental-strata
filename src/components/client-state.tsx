"use client";

import { useState } from "react";

export function ClientState() {
  const [count, setCount] = useState(0);

  return (
    <aside className="client-state" aria-labelledby="client-state-title">
      <div>
        <p className="eyebrow">react-owned island</p>
        <h2 id="client-state-title">Client state stays interactive</h2>
      </div>
      <p className="muted">
        Farm keeps Client Components on React while eligible server content is rendered through
        Strata.
      </p>
      <div className="counter" aria-label="Interactive counter">
        <button type="button" onClick={() => setCount((value) => value - 1)} aria-label="Decrease">
          −
        </button>
        <output aria-live="polite">{count}</output>
        <button type="button" onClick={() => setCount((value) => value + 1)} aria-label="Increase">
          +
        </button>
      </div>
    </aside>
  );
}

