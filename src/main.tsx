import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import "./index.css";

/** Tracks SPA navigations (requires `route` + `path` per @vercel/analytics). */
function VercelWebAnalytics() {
  const { pathname, search } = useLocation();
  const path = `${pathname}${search}`;
  return <Analytics framework="react-router" route={path} path={path} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <VercelWebAnalytics />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
