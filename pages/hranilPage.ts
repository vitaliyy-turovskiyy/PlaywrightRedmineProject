import { Page } from '@playwright/test';
export default class hranilPage{
   
    constructor(public page: Page){ }
    
    async clickHranilische(){
            this.page.click('[class="repository"]')}
    
    async clickStatistics(){
            this.page.click('[href="/projects/redmine/repository/statistics"]')}

    


}