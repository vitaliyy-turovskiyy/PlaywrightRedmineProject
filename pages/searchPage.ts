import { expect, Locator, Page } from '@playwright/test';

export default class SearchPage{
   readonly page: Page;
   readonly fieldSearch: Locator;
   readonly enterValue: Locator;
   
   constructor( page: Page){ 
      this.page = page;
      this.fieldSearch = page.locator('input[class="small"]')    
      this.enterValue = page.locator('[id="q"]')    
   }

   async clickSearch(){
      await this.fieldSearch.click()
   }

   async addValue(value: string){
      await this.enterValue.type(value)
   }

   checkAddValue(){
      return this.enterValue
   }
}