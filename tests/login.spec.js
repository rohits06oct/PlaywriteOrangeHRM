import { test, expect } from '@playwright/test';
const { LoginPage } = require('./pages/LoginPage');

let credentialsMap = new Map();
let loginPage;

test.beforeEach('Open the URL', async ({ page }) => {
   loginPage = new LoginPage(page);
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('On login page Store the Username and password', async ({ page }) => {
    await page.waitForSelector("//div[contains(@class,'demo-credentials')]//p");
    const credentials = await page.locator("//div[contains(@class,'demo-credentials')]//p").all();
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
    await expect(credentialsMap.get('Username')).toBe('Admin');
    await expect(credentialsMap.get('Password')).toBe('admin123');
});

test('Fill login details and login successfully', async ({ page }) => {
    await loginPage.login(credentialsMap.get('Username'), credentialsMap.get('Password'));
    await loginPage.validatePageLoad("Dashboard");
    await page.context().storageState({path: "login.json"});
});
