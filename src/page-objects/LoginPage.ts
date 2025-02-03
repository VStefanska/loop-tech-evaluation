import { User } from '../auth/users.setup'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {

    get username() {
        return this.page.locator('//input[@id="username"]')
    }

    get password() {
        return this.page.locator('//input[@id="password"]')
    }

    get loginBtn() {
        return this.page.locator('//button[text()="Sign in"]')
    }

    async goto() {
        await this.page.goto('')
    }

    async login(user: User) {
        await this.goto();
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.loginBtn.click();
    }

}