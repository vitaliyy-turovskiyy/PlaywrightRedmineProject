import { Page } from '@playwright/test';
export default class loginPage{
   
    constructor(public page: Page){ }
    async EnterUserNickName(userNick: string){
        await this.page.locator("td #username").type(userNick)
    }

    async EnterUserPassword(userPassword: string){
        await this.page.locator("#password").type(userPassword)
    }

  
    async ClickEnter(){
        await  this.page.click("input[type=submit]")
    }


}