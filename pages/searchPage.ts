import { Page } from '@playwright/test';
export default class SearchPage{
   
     constructor(public page: Page){    
     }

         async clickSearch(){
             await this.page.click('input[class="small"]')
         }
         async addValue(value: string){
             await this.page.locator('[id="q"]').type(value)
         }

         checkAddValue(){
            return this.page.locator('[id="q"]')
         }


}