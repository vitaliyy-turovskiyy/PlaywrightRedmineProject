import { expect, Locator, Page } from '@playwright/test';

export default class PasswordRecoveryPage{
    readonly page: Page;
    readonly enterLogin: Locator;
    readonly enterButton: Locator;
    readonly addEmail: Locator;
    readonly acceptEmail: Locator;
    readonly informWindow: Locator;
   
    constructor( page: Page){ 
        this.page = page;
        this.enterLogin = page.locator("a.login")     
        this.enterButton = page.locator('a[href="/account/lost_password"]')     
        this.addEmail = page.locator("#mail")     
        this.acceptEmail = page.locator('[name="commit"]')     
        this.informWindow = page.locator('[id="flash_error"]')     
    }

    async clickEnterLogin(){
        await this.enterLogin.click()
    }

    async clickEnterButton(){
        await this.enterButton.click()
    }

    async enterEmail(email: string){
        await this.addEmail.type(email)
    }

    async clickAcceptEmail(){
        await this.acceptEmail.click()
    }

    checkInformWindow(){
        return this.informWindow
    }
}