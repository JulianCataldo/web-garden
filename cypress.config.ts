import { defineConfig } from 'cypress';

export default defineConfig({
  // This fix a weird bug when navigating to home link
  chromeWebSecurity: false,

  e2e: {
    viewportWidth: 1280,
    viewportHeight: 960,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
