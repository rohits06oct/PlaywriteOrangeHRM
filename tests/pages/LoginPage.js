const { expect } = require('@playwright/test');
const { NavigationPage } = require('./NavigationPage');

class LoginPage extends NavigationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.loginCredentials = page.locator("div[class*='demo-credentials'] p");
    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("button[type='submit']");
  }

  // Fetching the login details from the page and store it inside the map
  async fetchStoreLoginDetails(){
    let credentialsMap = new Map();
    await this.loginCredentials.first().waitFor({ state: 'visible' });
    const credentials = await this.loginCredentials.all();
    for (const pElement of credentials) {
    const text = await pElement.textContent();
        if (text) {
        const parts = text.split(' : ');
        if (parts.length === 2) {
            const key = parts[0].trim();
            const value = parts[1].trim();
            credentialsMap.set(key, value);
            }
        }
    }
    return credentialsMap;
  }

  // Performing login with map store credentials
  async login(username, password) {
    await this.loginButton.waitFor({ state: 'visible' });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Validating the map store credentials are correct or not
    async validateLoginCredentials(username, password) {
    await expect(username).toBe('Admin');
    await expect(password).toBe('admin123');
  }

}

module.exports = { LoginPage };
