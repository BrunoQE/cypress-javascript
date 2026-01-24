const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports/cucumber-json",
  reportPath: "reports/cucumber-html",
  reportName: "OrangeHRM - QA Automation Report",
  displayDuration: true,
  metadata: {
    browser: { name: "chrome" },
    device: "Local machine",
    platform: { name: process.platform },
  },
});
