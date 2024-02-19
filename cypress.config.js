const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: "mochawesome",
  // reporterOptions: {
  //   "overwrite": false,
  //   "html": false,
  //   "json": true
  // },
  // reporter: 'junit',
  // reporterOptions: {
  //   mochaFile: 'results/my-test-output.xml',
  //   toConsole: true,
  // },
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
