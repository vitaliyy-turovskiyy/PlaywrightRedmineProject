import { Page } from '@playwright/test';
export default class PasswordRecoveryPage{
   
    constructor(public page: Page){      
    }

         async clickEnterLogin(){
             await this.page.click("a.login")
         }

         async clickEnterButton(){
             await this.page.click('a[href="/account/lost_password"]')
         }

         async enterEmail(email: string){
             await this.page.locator("#mail")
             .type(email)
         }

          async clickAcceptEmail(){
             await this.page.click('[name="commit"]')
         }

         checkInformWindow(){
             return this.page.locator('[id="flash_error"]')
        }



}