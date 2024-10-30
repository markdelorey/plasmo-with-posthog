# Plasmo with PostHog
Browser extension built with [Plasmo](https://docs.plasmo.com/) to inject PostHug on pages including session replays.

## Installation and development

1. Download and install this repository
```
pnpm install
```
2. Create .env and add your PostHog project key
3. Run the dev environment
```
pnpm dev
``` 
4. Load the extension in chrome://extensions
* Enable Developer mode
* Click Load unpacked and select `build/chrome-mv3-dev directory`


## Testing

1. Build the extension
```
pnpm build
```
2. Load the extension in chrome://extensions
* Enable Developer mode
* Click Load unpacked and select `build/chrome-mv3-prod directory`
3. Verify functionality
* Visit supported domains (e.g., https://google.com, https://espn.com).
* Confirm that PostHog events and session replays are logged as expected.

MIT License
Copyright (c) 2024 Mark Delorey