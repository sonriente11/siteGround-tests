import { Page } from "playwright";
import { expect } from "@playwright/test";
import { LeftNavigationMenu } from "../../pages/LeftNavigationMenu";
import { EmailCategory } from "../../pages/EmailCategory";

// Test case: TC02 Add an empty email Forwarder.

export default async function (page: Page) {
  const emailCategory = new EmailCategory(page);
  const leftNavigationMenu = new LeftNavigationMenu(page);
  // 1. Load the home page
  await leftNavigationMenu.goto();
  await leftNavigationMenu.openNavigationIfCollapsed();

  // 2. From the left navigation, select Email -> Forwarders.
  await leftNavigationMenu.email.click();
  await leftNavigationMenu.forwarders.click();
  // 3. Check dropdown options in the Select Domain dropdown
  emailCategory.selectDomainDropdownOptionsValidation();
  // 4. Select site-tools-demo.net
  await emailCategory.siteToolsDemo.click();
  // 5. Leave inputs empty
  // 6. Click on Create button
  await emailCategory.createNewAccountButton.click();
  // 7. Validate that the following error “Required field” appears
  await leftNavigationMenu.pageScroll.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  await expect(emailCategory.forwardAllMessagesSentToInputField).toContainText(
    "Required field",
  );
}
