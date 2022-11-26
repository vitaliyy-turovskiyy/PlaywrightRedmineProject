import { chromium, test } from '@playwright/test';
import RegisterPage from "../pages/registerPage"
import loginPage from "../pages/loginPage"
import ForgotpasswordPage from "../pages/forgotpasswordPage"
import HranilPage from "../pages/hranilPage"
import SearchPage from "../pages/searchPage"

const email = "Tur123@gmail.com";
const password = "Vitaha123";
test('register test', async ({ page }) => {
  
  const register = new RegisterPage(page);
  await page.goto('https://www.redmine.org/account/register');
  await register.enterUserNick("Vitaha");
  await register.enterUserPassword(password);
  await register.enterPasswordConfirm(password);
  await register.enterUserName("Vitvitvit");
  await register.enterLastName("Tur");
  await register.enterEmail(email);
  await register.clickAccept();
  await page.waitForTimeout(3000);

});

test('login test', async ({ page }) => {
  
  const register = new loginPage(page);
  await page.goto('https://www.redmine.org/login');
  await register.enterUserNick("Vitaha");
  await register.enterUserPassword(password);
  await register.clickEnter();
  await page.waitForTimeout(2000);

});

test('forgot password ', async ({ page }) => {
  
  const register = new ForgotpasswordPage(page);
  await page.goto('https://www.redmine.org/');
  await register.clickEnterLogin();
  await register.clickEnter();
  await register.enterEmail(email);
  await register.clickAcceptEmail();
 
});

test('hranilische ', async ({ page }) => {
  
  const register = new HranilPage(page);
  await page.goto('https://www.redmine.org/');
  await register.clickHranilische();
  await register.clickStatistics();
  
  await page.locator('[class="theme-Redmine project-redmine controller-repositories action-stats"]').screenshot({ path: 'screenshot.png' });
  
 
});

test('search', async ({ page }) => {
  
  const register = new SearchPage(page);
  await page.goto('https://www.redmine.org/');
  await register.clickSearch();
  await register.addValue("test");
  await page.keyboard.press('Enter');
  
 });