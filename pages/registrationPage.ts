import { Page } from '@playwright/test';
export default class RegistrationPage{
   
   constructor(public page: Page){    
   }
   
      async enterUserNick(userNick: string){
         await this.page.locator("#user_login").type(userNick)
      }

      async enterUserPassword(userPassword: string){
         await this.page.locator("#user_password").type(userPassword)
      }

      async enterPasswordConfirm(passwordConfirm: string){
         await this.page.locator("#user_password_confirmation").type(passwordConfirm)
      }

      async enterUserName(userName: string){
         await this.page.locator("#user_firstname").type(userName)
      }

      async enterLastName(lastName: string){
         await this.page.locator("#user_lastname").type(lastName)
      }

      async enterEmail(email: string){
         await this.page.locator("#user_mail").type(email)
      }          

      async clickAccept(){
         await this.page.click("#new_user > input[type=submit]")
      }
     
      checkUserName(){
         return this.page.locator("#user_firstname")
      }

      checkLastName(){
         return this.page.locator("#user_lastname")
      }

      checkEmail(){
         return this.page.locator("#user_mail")
      }

      informMessageisDispl(){
         return this.page.locator('[id="errorExplanation"]')
      }
}