import { Locator, Page } from "@playwright/test";
import { BASE_URL, DEMO_TOKEN } from "../utils/environmentVariables";

export class LeftNavigationMenu {
  readonly page: Page;
  //Locators for the categories
  readonly hamburgerMenuIcon: Locator;
  readonly site: Locator;
  readonly security: Locator;
  readonly speed: Locator;
  readonly wordPress: Locator;
  readonly domain: Locator;
  readonly email: Locator;
  //Locators for the sub-categories
  readonly accounts: Locator;
  readonly forwarders: Locator;
  readonly pageScroll: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hamburgerMenuIcon = page.locator(".sg-drawer-icon");
    this.site = page.locator('li[data-e2e="navigation-group-sites"]');
    this.security = page.locator('li[data-e2e="navigation-group-security"]');
    this.speed = page.locator('li[data-e2e="navigation-group-speed"]');
    this.wordPress = page.locator('li[data-e2e="navigation-group-wordpress"]');
    this.domain = page.locator('li[data-e2e="navigation-group-domains"]');
    this.email = page.locator('li[data-e2e="navigation-group-mail"]');
    this.accounts = page.getByTestId("navigation-list-item-email");
    this.forwarders = page
      .getByTestId("navigation-list-item-email-forward");
    this.pageScroll = page.getByTestId("page");
  }

  async goto() {
    await this.page.goto(`${BASE_URL}?demoToken=${DEMO_TOKEN}`);
  }

  async openNavigationIfCollapsed() {
    if (await this.hamburgerMenuIcon.isVisible()) {
      await this.hamburgerMenuIcon.click();
    }
  }
}
