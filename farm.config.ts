import { defineConfig } from "@farm.js/core";

export default defineConfig({
  experimental: {
    serverComponents: true,
    optimizedBoundary: true,
  },
  deploy: {
    target: "vercel",
  },
});
