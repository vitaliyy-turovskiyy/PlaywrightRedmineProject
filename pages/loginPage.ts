import { expect, Locator, Page } from '@playwright/test';

export default class loginPage{
    readonly page: Page;
    readonly UserNickName: Locator;
    readonly UserPassword: Locator;
    readonly EnterButton: Locator;
    readonly InformationWindow: Locator;
   
    constructor( page: Page){ 
        this.page = page;
        this.UserNickName = page.locator("td #username")   
        this.UserPassword = page.locator("#password")   
        this.EnterButton = page.locator("input[type=submit]")   
        this.InformationWindow = page.locator('[id="flash_error"]')   
    }

    async enterUserNickName(userNick: string){
        await this.UserNickName.type(userNick)
    }

    async enterUserPassword(userPassword: string){
        await this.UserPassword.type(userPassword)
    }
  
    async clickEnter(){
        await this.EnterButton.click()
    }

    nameisVisible(){
        return this.UserNickName
    }

    passwordisAdd(){
        return this.UserPassword
    }
    
    checkInformationWindow(){
        return this.InformationWindow
    }
}