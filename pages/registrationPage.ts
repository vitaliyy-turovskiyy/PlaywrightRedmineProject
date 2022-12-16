import { expect, Locator, Page } from '@playwright/test';
import { password, email, UserName, LastName } from "../src/testData"

export default class RegistrationPage{

   readonly page: Page;
   readonly addUserNick: Locator;
   readonly addUserPassword: Locator;
   readonly userPasswordConfirm: Locator;
   readonly enterFirstName: Locator;
   readonly addLastName: Locator;
   readonly addUserMail: Locator;
   readonly acceptButtom: Locator;
   readonly MessageisDispl: Locator;
   
   constructor( page: Page){
      this.page = page;
      this.addUserNick = page.locator("#user_login")    
      this.addUserPassword = page.locator("#user_password")    
      this.userPasswordConfirm = page.locator("#user_password_confirmation")    
      this.enterFirstName = page.locator("#user_firstname")    
      this.addLastName = page.locator("#user_lastname")    
      this.addUserMail = page.locator("#user_mail")    
      this.acceptButtom = page.locator("#new_user > input[type=submit]")    
      this.MessageisDispl = page.locator('[id="errorExplanation"]')    
   }
   
   async enterUserNick(userNick: string){
      await this.addUserNick.fill(userNick)
      await expect(this.addUserNick).toHaveValue("Vitaha")
   }

   async enterUserPassword(userPassword: string){
      await this.addUserPassword.type(userPassword)
      await expect(this.addUserPassword).toHaveValue(password)
   }

   async enterPasswordConfirm(passwordConfirm: string){
      await this.userPasswordConfirm.type(passwordConfirm)
      await expect(this.userPasswordConfirm).toHaveValue(password)
   }

   async enterUserName(userName: string){
      await this.enterFirstName.type(userName)
      await expect(this.enterFirstName).toHaveValue(UserName)
   }

   async enterLastName(lastName: string){
      await this.addLastName.type(lastName)
      await expect(this.addLastName).toHaveValue(LastName)
   }

   async enterEmail(email: string){
      await this.addUserMail.type(email)
      await expect(this.addUserMail).toHaveValue(email)
   }          

   async clickAccept(){
      await this.acceptButtom.click()
   }
     
   checkUserName(){
      return this.enterFirstName
   }

   checkLastName(){
      return this.addLastName
   }

   checkEmail(){
      return this.addUserMail
   }

   informMessageisDispl(){
      return this.MessageisDispl
   }
      
}