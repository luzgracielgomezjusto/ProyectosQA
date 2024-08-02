class EmployeePage {
    constructor(page) {
        this.page = page;
    }

    async addEmployee(firstName, lastName, empId) {
        await this.page.click('a[href="/web/index.php/pim/addEmployee"]');
        await this.page.fill('input[name="firstName"]', firstName);
        await this.page.fill('input[name="lastName"]', lastName);
        await this.page.fill('input[name="employeeId"]', empId);
        await this.page.click('button[type="submit"]');
    }

    async verifyEmployee(firstName, lastName) {
        await this.page.click('a[href="/web/index.php/pim/viewEmployeeList"]');
        await this.page.fill('input[name="empsearch[employee_name][empName]"]',`${firstName} ${lastName}`);
        await this.page.click('button[type="submit]');
        const name = await this.page.innerText('.table tbody tr:first-child td:nth-child(3)');
        return name.includes(firstName) && name.includes(lastName);
    }
}

module.exports = EmployeePage;