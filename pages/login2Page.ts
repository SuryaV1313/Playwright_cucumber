import {expect, Locator, Page} from '@playwright/test'

export class Login2{

    readonly page:Page;
    readonly usnm:Locator;
    readonly passwd:Locator;
    readonly logbtn:Locator;
    readonly logchktxt:Locator;

    constructor(page:Page){
        this.page=page;
        this.usnm=page.locator('#username');
        this.passwd=page.locator('#password');
        this.logbtn=page.getByRole('button',{name: 'Submit'});
        this.logchktxt=page.getByText('Congratulations student. You successfully logged in!');

    

    }

    async navigate(){
        await this.page.goto(process.env.SECOND_URL!);
    }

    async chklogfldenb(){
        await expect(this.usnm).toBeEditable();
        await expect(this.passwd).toBeEditable();
        await expect(this.logbtn).toBeEnabled


    }

    async loginnow(){
        await this.usnm.fill('student');
        await this.passwd.fill('Password123');
        await this.logbtn.click();
        await expect(this.logchktxt).toBeVisible();
    }

    

}

