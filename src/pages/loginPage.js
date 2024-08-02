class LoginPage {
    constructor(page){
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(username, password) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');

        console.log('Login submitted');
        /*await this.page.waitForNavigation();*/
        await this.page.waitForURL('**/dashboard', {timeout: 60000}); 
        console.log('Current URL:', this.page.url());

    }
}

module.exports = LoginPage;