// contents/injectPosthog.ts
// @plasmohq/content-script
// @match <all_urls>
import posthog from "posthog-js";
import rrwebRecord from "posthog-js/dist/recorder"

import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*.google.com/*", "https://*.espn.com/*"]
}

posthog.init(process.env.PLASMO_PUBLIC_POSTHOG_API_KEY, {
  api_host: "https://app.posthog.com",
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

// Start the recorder if session recording is enabled
rrwebRecord({
  emit: (event) => posthog.capture('$snapshot', { event })
});