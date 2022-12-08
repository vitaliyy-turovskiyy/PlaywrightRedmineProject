import { Page } from '@playwright/test';
export default class loginPage{
   
     constructor(public page: Page){    
     }

         async enterUserNickName(userNick: string){
             await this.page.locator("td #username")
             .type(userNick)
         }

         async enterUserPassword(userPassword: string){
             await this.page.locator("#password")
             .type(userPassword)
         }
  
         async clickEnter(){
             await  this.page.click("input[type=submit]")
         }

         checkInformationWindow(){
             return this.page.locator('[id="flash_error"]')
         }

         nameisVisible(){
             return this.page.locator("td #username")
        }

        passwordisAdd(){
            return this.page.locator("#password")
       }
       
}