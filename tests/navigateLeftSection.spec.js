import { test, expect } from '@playwright/test';

test.use({ storageState: 'login.json' });

test.beforeEach('Open the URL', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test('Navigate to Leave section', async ({ page }) => {
    await page.waitForSelector("//h6[contains(@class,'h6 oxd-topbar-header')]");
    await page.locator("//span[text()='Leave']").click();
    await page.waitForSelector("//h6[contains(@class,'h6 oxd-topbar-header')]");
    const leaveTitle = await page.locator("//h6[contains(@class,'h6 oxd-topbar-header')]");
    await expect(leaveTitle).toHaveText('Leave');
});

test('Navigate to My Info section', async ({ page }) => {
    await page.waitForSelector("//h6[contains(@class,'h6 oxd-topbar-header')]");
    await page.locator("//span[text()='My Info']").click();
    await page.waitForSelector("//h6[contains(@class,'h6 oxd-topbar-header')]");
    const leaveTitle = await page.locator("//h6[contains(@class,'h6 oxd-topbar-header')]");
    await expect(leaveTitle).toHaveText('PIM');
});

test('Navigate to Time section', async ({ page }) => {
    await page.waitForSelector("//h6[contains(@class,'h6 oxd-topbar-header')]");
    await page.locator("//span[text()='Time']").click();
    await page.waitForSelector("//h6[contains(@class,'h6 oxd-topbar-header')]");
    const leaveTitle = await page.locator("//h6[contains(@class,'h6 oxd-topbar-header-breadcrumb-level')]");
    await expect(leaveTitle).toHaveText('Timesheets');
});
