const { chromium } = require('playwright');
const LoginPage = require('../pages/loginPage');
const EmployeePage = require('../pages/employeePage');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
    
    const employeePage = new EmployeePage(page);
    await employeePage.addEmployee('Luz', 'Gomez', '1234');

    const isEmployedCreated = await employeePage.verifyEmployee('Luz', 'Gomez');
    console.log(isEmployedCreated ? 'Employee created successfully' : 'Employee creation failed');

    await browser.close();
})();