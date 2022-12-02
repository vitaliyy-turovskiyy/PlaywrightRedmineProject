import { Page } from '@playwright/test';
export default class PasswordRecoveryPage{
   
    constructor(public page: Page){ }

async ClickEnterLogin(){
    await this.page.click("a.login")
}

async ClickEnter(){
    await this.page.click('a[href="/account/lost_password"]')
}

async EnterEmail(email: string){
    await this.page.locator("#mail").type(email)
}

async ClickAcceptEmail(){
    await this.page.click('[name="commit"]')
}



}