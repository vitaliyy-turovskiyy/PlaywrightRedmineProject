import { Page } from '@playwright/test';
export default class ForgotpasswordPage{
   
    constructor(public page: Page){ }
async clickEnterLogin(){
    this.page.click("a.login")}

async clickEnter(){
    this.page.click('a[href="/account/lost_password"]')}

async enterEmail(email: string){
         await this.page.locator("#mail").type(email)}

async clickAcceptEmail(){
    this.page.click('[name="commit"]')}    

  
           



}