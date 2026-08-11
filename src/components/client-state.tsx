"use client";

import { useState } from "react";

export function ClientState() {
  const [count, setCount] = useState(0);

  return (
    <div className="command-row client-state-row">
      <span>03</span>
      <div className="counter" aria-label="Interactive client-state counter">
        <span>Client state</span>
        <button type="button" onClick={() => setCount((value) => value - 1)} aria-label="Decrease">
          −
        </button>
        <output aria-live="polite">{count}</output>
        <button type="button" onClick={() => setCount((value) => value + 1)} aria-label="Increase">
          +
        </button>
      </div>
    </div>
  );
}
