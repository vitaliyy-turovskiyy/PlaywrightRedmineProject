import { Page } from '@playwright/test';
export default class RegistrationPage{
   
    constructor(public page: Page){ }
     async EnterUserNick(userNick: string){
         await this.page.locator("#user_login").type(userNick)
          }

    async EnterUserPassword(userPassword: string){
        await this.page.locator("#user_password").type(userPassword)
           }

   async EnterPasswordConfirm(passwordConfirm: string){
        await this.page.locator("#user_password_confirmation").type(passwordConfirm)
           }

   async EnterUserName(userName: string){
        await this.page.locator("#user_firstname").type(userName)
           }

    async EnterLastName(lastName: string){
        await this.page.locator("#user_lastname").type(lastName)
          }

     async EnterEmail(email: string){
        await this.page.locator("#user_mail").type(email)
      }          

     async ClickAccept(){
        await this.page.click("#new_user > input[type=submit]")
      }

}