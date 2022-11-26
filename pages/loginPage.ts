import { Page } from '@playwright/test';
export default class loginPage{
   
    constructor(public page: Page){ }
     async enterUserNick(usernick: string){
         await this.page.locator("td #username").type(usernick)
          }

    async enterUserPassword(userpassword: string){
        await this.page.locator("#password").type(userpassword)
           }

  
           async clickEnter(){
            this.page.click("input[type=submit]")
                  }


}