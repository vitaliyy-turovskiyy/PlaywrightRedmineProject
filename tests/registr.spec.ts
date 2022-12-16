import  test, { expect }  from '@playwright/test';
import RegistrationPage from "../pages/RegistrationPage"
import loginPage from "../pages/loginPage"
import PasswordRecoveryPage from "../pages/PasswordRecoveryPage"
import GraphsPage from "../pages/GraphsPage"
import SearchPage from "../pages/SearchPage"
import { password, email, UserName, LastName } from "../src/testData"


  test('Re_001 The user checks the availability of the information window during registration using existing data', async ({ page }) => {
  
     const register = new RegistrationPage(page);
     await page.goto('https://www.redmine.org/account/register');
     await register.enterUserNick("Vitaha");
     await register.enterUserPassword(password);
     await register.enterPasswordConfirm(password);
     await register.enterUserName(UserName);
     await expect(register.checkUserName()).toHaveValue(UserName);
     await register.enterLastName(LastName);
     await expect(register.checkLastName()).toHaveValue(LastName);
     await register.enterEmail(email);
     await expect(register.checkEmail()).toHaveValue(email);
     await register.clickAccept();
     await expect( register.informMessageisDispl()).toHaveText(/Login has already been taken */);
   });

  test('Re_002 Checking the user`s ability to log in to the system with a non-activated account', async ({ page }) => {
  
     const login = new loginPage(page);
     await page.goto('https://www.redmine.org/login');
     await login.enterUserNickName("Vitaha");
     await expect(login.nameisVisible()).toHaveValue('Vitaha');
     await login.enterUserPassword(password);
     await expect(login.passwordisAdd()).toHaveValue(password);
     await login.clickEnter();
     await expect(login.checkInformationWindow()).toHaveText(/You haven't activated your account yet.*/);
     
   });

  test.beforeEach( async ({ page }) =>{
     await page.goto('https://www.redmine.org/');
   });

  test('Re_003 Checking the possibility of password recovery with an inactive account ', async ({ page }) => {
  
     const passwordrec = new PasswordRecoveryPage(page);
     await passwordrec.clickEnterLogin();
     await passwordrec.clickEnterButton();
     await expect(page).toHaveURL('https://www.redmine.org/account/lost_password');
     await passwordrec.enterEmail(email);
     await passwordrec.clickAcceptEmail();
     await expect(passwordrec.checkInformWindow()).toHaveText(/You haven't activated your account yet. If you want to receive a new activation email, please click this link./);
   });

  test('Re_004 Checking the availability of statistics graphs ', async ({ page }) => {
  
     const graphs = new GraphsPage(page);
     await graphs.clickStorage();
     await expect(page).toHaveTitle('/ - Repository - Redmine')
     await graphs.clickStatistics();
     await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/repository/statistics');
   });

  test('Re_005 Checking the functionality of the search field', async ({ page }) => {
  
     const search = new SearchPage(page);
     await search.clickSearch();
     await search.addValue("test");
     await expect(search.checkAddValue()).toHaveValue('test');
     await page.keyboard.press('Enter');
     await expect(page).toHaveTitle('Search - Redmine')
   });

