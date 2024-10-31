// contents/injectPosthog.ts
// @plasmohq/content-script
// @match <all_urls>
import posthog from 'posthog-js/dist/module.full.no-external'

import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*.google.com/*", "https://*.espn.com/*"]
}

posthog.init(process.env.PLASMO_PUBLIC_POSTHOG_API_KEY, {
  api_host: "https://app.posthog.com",
  persistence: "localStorage",
  autocapture: true,
  disable_session_recording: false,
  capture_pageview: true,
  loaded: (posthog) => {
    posthog.register({
      full_url: window.location.href,
      domain: window.location.hostname
    });
  }
});