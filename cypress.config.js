const { defineConfig } = require("cypress");

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as dotenv from "dotenv"

dotenv.config();

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/**/*.feature',
    defaultCommandTimeout: 20000,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );

      config.env = {
        ...config.env,
        portal_url: process.env.portal_url,
        portal_user: process.env.portal_user,
        portal_password: process.env.portal_password
      }

      return config;
    },
  },
  screenshotsFolder: 'reports/screenshots',
  video: false
});
