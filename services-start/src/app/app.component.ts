import { Component } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent {


  accounts;

  constructor(private accountService: AccountService) { 
    this.accounts = this.accountService.accounts;
  }
  
 

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accountService.accounts.push(newAccount)
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    console.log("status observable" + this.accountService.status.subscribe());
    
    this.accountService.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
