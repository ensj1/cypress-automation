import { defineConfig } from "cypress";
import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib';
import { log } from 'cypress-log/log.task';
import { setupDb } from './cypress/utils/setupDb';

export default defineConfig({

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
  chromeWebSecurity: false,
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
      on('task', { log });
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
