class EmployeePage {
    constructor(page) {
        this.page = page;
    }

    async addEmployee(firstName, lastName, empId) {
        //Menu PIM
        await this.page.waitForSelector('a[href="/web/index.php/pim/viewEmployeeList"]', { visible: true, timeout: 60000 });

        await this.page.waitForSelector('a[href="/web/index.php/pim/addEmployee"]', { visible: true, timeout: 60000 })
        await this.page.click('a[href="/web/index.php/pim/addEmployee"]');
        await this.page.fill('input[name="firstName"]', firstName);
        await this.page.fill('input[name="lastName"]', lastName);
        await this.page.fill('input[name="employeeId"]', empId);
        await this.page.click('button[type="submit"]');

        console.log('Employee form submitted');
        /*await this.page.waitForSelector();*/
        //Esperar que se guarde el cambio y cambie la url
        await this.page.waitForURL('**/viewEmployeeList', {timeout: 60000});
    }

    async verifyEmployee(firstName, lastName) {
        await this.page.click('a[href="web/index.php/pim/viewEmployeeList"]');
        await this.page.fill('input[name="empsearch[employee_name][empName]"]',`${firstName} ${lastName}`);
        await this.page.click('button[type="submit]');
        const name = await this.page.innerText('.table tbody tr:first-child td:nth-child(3)');
        return name.includes(firstName) && name.includes(lastName);
    }
}

module.exports = EmployeePage;