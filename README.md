#  :books: ***Educational project using simple automation test framework written with TypeScript and [Playwright](https://playwright.dev/docs/intro) and implements [Page Object Model Pattern](https://playwright.dev/docs/pom).***
____
## Short description of the project
In this project, we write, automate and output a report to the browser of several tests for the [site](https://www.redmine.org)
____

### *If you want to run test locally, please follow these steps:*


1. Clone this [repository](https://github.com/vitaliyy-turovskiyy/PlaywrightRedmineProject.git).
2. Make sure you have node.js installed. If you don't, please visit [official website](https://nodejs.org/en/download/) for instructions.
3. Run `npm install` to install node modules.
4. That's it, now you can run tests with `npm run test` - it will run test in 3 browsers (chromium, firefox, webkit) in parallel.

If you want to run it in headed mode, then change configuration to `headless: true` in `playwright.config.js`
___

#### *Test results*

Test results can be displayed in a Allure Report. To do this, you need to execute the following commands:

Installation: *`npm i -D @playwright/test allure-playwright`*

Generate Allure Report: *`npx allure generate my-allure-results -o allure-report --clean`*

Open Allure Report:
*`npx allure open allure-report`*

[Readmore](https://www.npmjs.com/package/allure-playwright) about allure-playwright





![LQ](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_O-uZzS8KUkUpmitdhiCVnDeYDj4vtCliw&usqp=CAU)
