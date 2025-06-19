import { test } from '@playwright/test';
const { NavigationPage } = require('../tests/pages/NavigationPage');

let navigationPage;

test.use({ storageState: 'login.json' });

test.beforeEach('Open the URL', async ({ page }) => {
  navigationPage = new NavigationPage(page);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test('Navigate to Leave section', async () => {
    await navigationPage.clickMenuItem("Leave");
    await navigationPage.validateMenuItem("Leave");
});

test('Navigate to My Info section', async () => {
    await navigationPage.clickMenuItem("My Info");
    await navigationPage.validateMenuItem("PIM");
});

test('Navigate to Time section', async () => {
    await navigationPage.clickMenuItem("Time");
    await navigationPage.validateMenuItem("Time");
});
