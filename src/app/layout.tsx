import type { LayoutProps, Metadata } from "@farm.js/core";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farm.js × Strata",
  description: "Automatic native rendering for eligible React Server Component content.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className="site-header">
          <a className="brand" href="/" aria-label="Farm.js experimental Strata home">
            <span className="brand-mark" aria-hidden="true">
              F
            </span>
            <span>farmjs / strata</span>
          </a>
          <span className="status">
            <span className="status-dot" aria-hidden="true" />
            experimental flag on
          </span>
        </header>
        {children}
      </body>
    </html>
  );
}

