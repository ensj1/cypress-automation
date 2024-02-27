const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const { setupDb } = require('./cypress/utils/setupDb')

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
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Result Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on('task', {
        setupDb
      });
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
