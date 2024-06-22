import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
    <div class="col-xs-12 row">
    <app-game-control (startEvent)="isNumberOddOrEven($event)"></app-game-control>
  </div>
  <div class="row col-xs-12" style="gap: 3px;">
    <div class="col-xs-5">
      <app-odd *ngFor="let item of oddNumbersArray" [eventStarted]="item"></app-odd>
    </div>
    <div class="col-xs-5">
      <app-even *ngFor="let value of evenNumbersArray" [eventStarted]="value"></app-even>
    </div>
  </div>
   </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isEven: boolean;
  evenNumbersArray: number[] = [];
  oddNumbersArray: number[] = [];


  ngOnInit() {

  }

  isNumberOddOrEven(counterValue: number) {
    console.log(counterValue);

    if ((counterValue % 2) == 0) {
      this.isEven = true;
      this.evenNumbersArray.push(counterValue);
      console.log("vvv", this.evenNumbersArray);

    } else {
      this.isEven = false;
      this.oddNumbersArray.push(counterValue)
    }
  }





}
