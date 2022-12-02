import  test, { expect }  from '@playwright/test';
import RegistrationPage from "../pages/registrationPage"
import loginPage from "../pages/loginPage"
import PasswordRecoveryPage from "../pages/PasswordRecoveryPage"
import StatisticsPage from "../pages/StatisticsPage"
import SearchPage from "../pages/searchPage"

const email = "Tur123@gmail.com";
const password = "Vitaha123";

test('Re_001 User registration verification test', async ({ page }) => {
  
  const register = new RegistrationPage(page);
  await page.goto('https://www.redmine.org/account/register');
  await register.EnterUserNick("Vitaha");
  await register.EnterUserPassword(password);
  await register.EnterPasswordConfirm(password);
  await register.EnterUserName("Vitvitvit");
  await register.EnterLastName("Tur");
  await register.EnterEmail(email);
  await register.ClickAccept();

  expect(await page.isVisible('[id="errorExplanation"]')).toBe(true)

});

test('Re_002 Validate user login with existing username and password', async ({ page }) => {
  
  const login = new loginPage(page);
  await page.goto('https://www.redmine.org/login');
  await login.EnterUserNickName("Vitaha");
  await login.EnterUserPassword(password);
  await login.ClickEnter();
  
  const locator = page.locator('[id="flash_error"]');
  await expect(locator).toHaveText(/You haven't activated your account yet.*/);

  
 
});

test.describe('URL', ()=> {
   test.beforeEach( async ({ page }) =>{
   await page.goto('https://www.redmine.org/');
});


test('Re_003 User password recovery check ', async ({ page }) => {
  
  const passwordrec = new PasswordRecoveryPage(page);
  //await page.goto('https://www.redmine.org/');
  await passwordrec.ClickEnterLogin();
  await passwordrec.ClickEnter();
  await passwordrec.EnterEmail(email);
  await passwordrec.ClickAcceptEmail();

  const locator = page.locator('[id="flash_error"]');
  await expect(locator).toHaveText(/You haven't activated your account yet. If you want to receive a new activation email, please click this link./);
  
 
});

test('Re_004 Checking the availability of statistics graphs ', async ({ page }) => {
  
  const statistics = new StatisticsPage(page);
  //await page.goto('https://www.redmine.org/');
  await statistics.ClickHranilische();
  await statistics.ClickStatistics();

  await expect(page).toHaveURL(/.*statistics/);
  
  
 
});

test('Re_005 Checking the functionality of the search', async ({ page }) => {
  
  const search = new SearchPage(page);
  //await page.goto('https://www.redmine.org/');
  await search.ClickSearch();
  await search.AddValue("test");
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/.*search/);
  
  
 });

});