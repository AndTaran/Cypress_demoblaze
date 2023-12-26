const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    excludeSpecPattern: ["**/2-advanced-examples/*", "**/1-getting-started/*"], //исключение папки с тестами
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 