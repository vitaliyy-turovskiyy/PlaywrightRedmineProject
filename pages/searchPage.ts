import { Page } from '@playwright/test';
export default class searchPage{
   
    constructor(public page: Page){ }

    async clickSearch(){
        this.page.click("input[type=submit]")
        }
     async addValue(value: string){
         await this.page.locator('[id="q"]').type(value)
        }

    async clickNext(){
        this.page.click("input[type=submit]")
        }

    

  
    


}