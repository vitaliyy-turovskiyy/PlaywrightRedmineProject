import { Page } from '@playwright/test';
export default class StatisticsPage{
   
    constructor(public page: Page){ 

    }
    
    async ClickHranilische(){
        await  this.page.click('[class="repository"]')
    }
    
    async ClickStatistics(){
        await this.page.click('[href="/projects/redmine/repository/statistics"]')
    }

}