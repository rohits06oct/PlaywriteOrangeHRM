const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("button[type='submit']");
    this.dashboardHeader = page.locator(".oxd-topbar-header-breadcrumb > .oxd-text");
  }

  async login(username, password) {
    await this.loginButton.waitFor({ state: 'visible' });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async validatePageLoad(expectedTitle) {
    const expected = String(expectedTitle).toLowerCase();
    await this.dashboardHeader.waitFor({ state: 'visible' });
    await expect(this.page).toHaveURL(new RegExp("/"+expected+"/"));
    await expect(this.page.url()).toContain(expected);
    await expect(this.dashboardHeader).toContainText(expectedTitle);
  }

}

module.exports = { LoginPage };
