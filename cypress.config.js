const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://autoforce-academy.pilotodetestes.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
