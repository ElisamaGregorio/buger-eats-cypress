const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: 
   { viewportWidth: 1440,
    viewportWidth: 900,
    baseUrl: 'https://buger-eats.vercel.app',
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
