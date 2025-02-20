const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://autoforce-academy.pilotodetestes.com.br/ddm-fiat-v2-dois",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
