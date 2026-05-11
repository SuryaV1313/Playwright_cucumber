import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login() {
    await this.page.fill("#user-name", process.env.LOGIN_USERNAME!);
    await this.page.fill("#password", process.env.LOGIN_PASSWORD!);
    await this.page.click("#login-button");
  }

  async verifyDashboard() {
    await this.page.locator(".inventory_list").waitFor({ timeout: 10000 });
  }
}