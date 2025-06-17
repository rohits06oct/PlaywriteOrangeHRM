// @ts-check
import { test, expect } from '@playwright/test';

let credentialsMap = new Map();

test.beforeEach('Open the URL', async ({ page }) => {
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

    console.log("Extracted Credentials Map:", credentialsMap);
    await expect(credentialsMap.get('Username')).toBe('Admin');
    await expect(credentialsMap.get('Password')).toBe('admin123');
});

test('Fill login details and login successfully', async ({ page }) => {
    await page.locator("//input[@placeholder='Username']").fill(credentialsMap.get('Username'));
    await page.locator("//input[@placeholder='Password']").fill(credentialsMap.get('Password'));
    await page.locator("//button[@type='submit']").click();
    await page.waitForSelector("//h6[contains(@class,'h6 oxd-topbar-header')]");
    const dashboardTitle = await page.locator("//h6[contains(@class,'h6 oxd-topbar-header')]");
    await page.context().storageState({path: "login.json"});
    await expect(dashboardTitle).toHaveText('Dashboard');
});
