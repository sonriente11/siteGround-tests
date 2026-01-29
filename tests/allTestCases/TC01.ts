import { Page } from "playwright";
import { expect } from "@playwright/test";
import { LeftNavigationMenu } from "../../pages/LeftNavigationMenu";
import { EmailCategory } from "../../pages/EmailCategory";

// Test case: TC01 - Add an email account

export default async function (page: Page) {
  const emailCategory = new EmailCategory(page);
  const leftNavigationMenu = new LeftNavigationMenu(page);
  const accountName = "test_account";
  // 1. Load the home page
  await leftNavigationMenu.goto();
  await leftNavigationMenu.openNavigationIfCollapsed();
  // 2. Go to Email -> Accounts.
  await leftNavigationMenu.email.click();
  await leftNavigationMenu.accounts.click();
  // 3. Check dropdown options in the Select Domain dropdown
  await emailCategory.selectDomainDropdownOptionsValidation();
  // 4. Select site-tools-demo.net
  const selectedOption = emailCategory.siteToolsDemo;
  const selectedOptionText = await selectedOption.innerText();
  await selectedOption.click();
  // 5. Enter Account Name - test_account
  await emailCategory.accountNameInputField.fill(accountName);
  // 6. Click on Generate in the Enter Password input field
  await emailCategory.generatePassword.click();
  // 7. Verify that Password is populated
  const passwordValue = await emailCategory.passwordInputField.inputValue();
  expect(passwordValue.length).toBeGreaterThan(0);
  // 8. Click on Create button
  await emailCategory.createNewAccountButton.click();
  // 9. Check that the successful message is displayed.
  await expect(emailCategory.successMessage).toHaveText(
    `Email account ${accountName}@${selectedOptionText} is created.`,
  );
  await leftNavigationMenu.pageScroll.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  // 10. Verify that account exists in the "Manage Email accounts" list
  const accountExists = await emailCategory.manageEmailAccountsListTitles.filter({ hasText: 'test_account' }).count();
  expect(accountExists).toBeGreaterThan(0);
}
