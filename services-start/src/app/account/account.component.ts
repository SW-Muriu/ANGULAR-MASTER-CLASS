import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();
  
  constructor(
    private loggingService: LoggingService,
    private accountsServce: AccountService,
  ) {

  }


  onSetTo(status: string) {
    this.accountsServce.updateStatus(this.id, status)
    this.loggingService.loggingStatusChange(status);
    this.accountsServce.status.emit(status)
  }
}
