const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: "mochawesome",
  // reporterOptions: {
  //   "overwrite": false,
  //   "html": false,
  //   "json": true
  // },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },
  e2e: {
    baseUrl: 'https://example.cypress.io',
    //reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
});
