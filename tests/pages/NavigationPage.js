const { expect } = require('@playwright/test');

class NavigationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.menuButton = (name) => page.locator(`//span[text()='${name}']`);
    this.dashboardHeader = page.locator(".oxd-topbar-header-breadcrumb > .oxd-text").first();
  }

  async clickMenuItem(name) {
    await this.menuButton(name).waitFor({ state: 'visible' });
    await this.menuButton(name).click();
  }

  async validateMenuItem(expectedTitle) {
    const expected = String(expectedTitle).toLowerCase();
    await this.dashboardHeader.waitFor({ state: 'visible' });
    await expect(this.page).toHaveURL(new RegExp("/"+expected+"/"));
    await expect(this.page.url()).toContain(expected);
    await expect(this.dashboardHeader).toContainText(expectedTitle);
  }

}

module.exports = { NavigationPage };
