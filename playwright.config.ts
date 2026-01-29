import "dotenv/config";
import { defineConfig, devices, PlaywrightTestConfig } from "@playwright/test";
import { BASE_URL } from "./utils/environmentVariables";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  workers: 1,
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: "chromium",
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Samsung Galaxy S20"],
      },
    },
  ],
  timeout: 30000,
  use: {
    baseURL: BASE_URL,
    ignoreHTTPSErrors: true,
    headless: false,
    viewport: null,
    trace: "on",
    launchOptions: {
      args: ["--start-maximized"],
    },
    testIdAttribute: "data-e2e",
  },

  reporter: [
    ["list"],
    ["html", { open: "always", outputFolder: "test-report" }],
  ],
};

export default config;
