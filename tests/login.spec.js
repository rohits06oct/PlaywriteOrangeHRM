import { test } from '@playwright/test';
const { LoginPage } = require('./pages/LoginPage');

let credentialsMap = new Map();
let loginPage;

test.beforeEach('Open the URL', async ({ page }) => {
   loginPage = new LoginPage(page);
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('On login page Store the Username and password', async () => {
    credentialsMap = await loginPage.fetchStoreLoginDetails();
    await loginPage.validateLoginCredentials(credentialsMap.get('Username'), credentialsMap.get('Password'));
});

test('Fill login details and login successfully', async ({ page }) => {
    await loginPage.login(credentialsMap.get('Username'), credentialsMap.get('Password'));
    await loginPage.validateMenuItem("Dashboard");
    await page.context().storageState({path: "login.json"});
});
