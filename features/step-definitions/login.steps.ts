import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../../pages/loginPage";

Given("user is on login page", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When("user logs in", async function () {
  await this.loginPage.login();
});

Then("user sees dashboard", async function () {
  await this.loginPage.verifyDashboard();
});