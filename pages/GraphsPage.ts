import { expect, Locator, Page } from '@playwright/test';

export default class GraphsPage{
  readonly page: Page;
  readonly Storage: Locator;
  readonly Statistics: Locator;

  constructor( page: Page){ 
    this.page = page;
    this.Storage = page.locator('[class="repository"]')
    this.Statistics = page.locator('[href="/projects/redmine/repository/statistics"]')
  }
    
  async clickStorage(){
    await  this.Storage.click()
  }
    
  async clickStatistics(){
    await this.Statistics.click()
  }
}