module.exports = {
    manifest: {
      permissions: ["activeTab", "scripting"],
      host_permissions: ["https://*.google.com/*", "https://*.espn.com/*"],
      content_scripts: [
        {
          matches: [
            "https://*.google.com/*",
            "https://*.espn.com/*"
          ],
          js: ["injectPosthog.js"],
          run_at: "document_idle"
        }
      ]
    }
  };