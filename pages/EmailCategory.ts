import { expect, Locator, Page } from "@playwright/test";

export class EmailCategory {
  readonly page: Page;
  // Locators used across multiple email sub-categories
  readonly dropdown: Locator;
  readonly dropDownOptions: Locator;
  readonly qaAutomationTools: Locator;
  readonly storeQaAutomationTools: Locator;
  readonly parkedQaAutomationTools: Locator;
  readonly siteToolsDemo: Locator;
  readonly allDropDownOptions: Locator;

  // Locators for Email-> Accounts sub category
  // Locators for Create new account form
  readonly accountNameInputField: Locator;
  readonly passwordInputField: Locator;
  readonly generatePassword: Locator;
  readonly createNewAccountButton: Locator;
  readonly manageEmailAccountsListTitles: Locator;
  readonly successMessage: Locator;

  // Locators for Email -> Forwarders sub category
  // Locators for create new rule
  readonly forwardAllMessagesSentToInputField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.getByTestId("dropdown-label");
    this.dropDownOptions = page.getByTestId("dropdown-options");
    this.allDropDownOptions = page.getByRole("option");
    this.qaAutomationTools = page.getByTestId("dropdown-option-1");
    this.storeQaAutomationTools = page.getByTestId("dropdown-option-3");
    this.parkedQaAutomationTools = page.getByTestId("dropdown-option-5");
    this.siteToolsDemo = page.getByTestId("dropdown-option-6");
    this.successMessage = page.getByTestId("box-notification").getByTestId("title");
    //
    this.accountNameInputField = page.getByTestId("text-input-name");
    this.passwordInputField = page.getByTestId("form-password-password");
    this.generatePassword = page
      .getByTestId("form-password-password-label")
      .getByTestId("password-generate");
    this.createNewAccountButton = page.getByTestId("create-box-submit");
    this.manageEmailAccountsListTitles = page.locator(
      '[data-component="table"][data-e2e="table"]',
    );
    //
    this.forwardAllMessagesSentToInputField = page.getByTestId(
      "forward-crate-name-label",
    );
  }
//Check options in the Select Domain dropdown
  async selectDomainDropdownOptionsValidation() {
    const expectedDropdownOptions = [
      "qa-automation-tools.com",
      "store.qa-automation-tools.com",
      "parked-qa-automation-tools.com",
      "site-tools-demo.net",
    ];
    await this.dropdown.click();
    await expect(this.allDropDownOptions).toHaveCount(
      expectedDropdownOptions.length,
    );
    const actualOptions = await this.allDropDownOptions.allTextContents();
    expect(actualOptions.map((text) => text.trim())).toEqual(
      expectedDropdownOptions,
    );
  }
}
