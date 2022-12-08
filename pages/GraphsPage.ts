import { Page } from '@playwright/test';
export default class GraphsPage{
   
    constructor(public page: Page){ 
    }
    
       async clickStorage(){
             await  this.page.click('[class="repository"]')
       }
    
       async clickStatistics(){
             await this.page.click('[href="/projects/redmine/repository/statistics"]')
       }

}