import { test, Page } from "@playwright/test";
import TC01 from "./allTestCases/TC01";
import TC02 from "./allTestCases/TC02";
test.describe ("Email Tests", async() => {
  

  test("TC01 - Add an email account", async ({page}) => {
    await TC01(page);
  });
  test("TC02 - Add an empty email Forwarder", async ({page}) => {
    await TC02(page);
  });

  test.afterEach(async ({page}) => {
    await page.close();
  });
});