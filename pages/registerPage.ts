import { Page } from '@playwright/test';
export default class RegisterPage{
   
    constructor(public page: Page){ }
     async enterUserNick(usernick: string){
         await this.page.locator("#user_login").type(usernick)
          }

    async enterUserPassword(userpassword: string){
        await this.page.locator("#user_password").type(userpassword)
           }

   async enterPasswordConfirm(passwordconfirm: string){
        await this.page.locator("#user_password_confirmation").type(passwordconfirm)
           }

   async enterUserName(username: string){
        await this.page.locator("#user_firstname").type(username)
           }

    async enterLastName(lastname: string){
        await this.page.locator("#user_lastname").type(lastname)
          }

     async enterEmail(email: string){
        await this.page.locator("#user_mail").type(email)
            }          

     async clickAccept(){
                this.page.click("#new_user > input[type=submit]")
                      }

}