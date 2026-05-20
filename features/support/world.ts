import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";

class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage: any;
  login2: any;
  // userpage: any;
}

setWorldConstructor(CustomWorld);