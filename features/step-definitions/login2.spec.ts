import {When,Given,Then} from '@cucumber/cucumber';
import { Login2 } from '../../pages/login2Page';

Given('user is navigated to login page',async function() {
    this.login2 = new Login2(this.page);
    await this.login2.navigate();});

When ('user check the fields and button are accessible',async function(){
    await this.login2.chklogfldenb();

});

Then ('user sees  when he can successfully login and successful text in dashboard', async function(){
    await this.login2.loginnow();

});




    




