import { Page } from '@playwright/test';
export default class searchPage{
   
    constructor(public page: Page){ }

    async ClickSearch(){
        await this.page.click('input[class="small"]')
    }
     async AddValue(value: string){
        await this.page.locator('[id="q"]').type(value)
    }


}