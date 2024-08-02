const { chromium } = require('playwright');
const LoginPage = require('../pages/loginPage');
const EmployeePage = require('../pages/employeePage');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
    console.log('Logged in successfully');
    
    const employeePage = new EmployeePage(page);
    await employeePage.addEmployee('Luz', 'Gomez', '1234');
    console.log('Employee added successfully');

    const isEmployeeCreated = await employeePage.verifyEmployee('Luz', 'Gomez');
    console.log(isEmployeeCreated ? 'Employee created successfully' : 'Employee creation failed');

    await browser.close(); 
})();