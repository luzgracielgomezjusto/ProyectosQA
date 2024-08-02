class LoginPage {
    constructor(page){
        this.page = page;
    }

    async navigate(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(username, password){
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }
}

module.exports = LoginPage;