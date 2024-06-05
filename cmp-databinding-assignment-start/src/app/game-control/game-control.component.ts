import { Component, EventEmitter, OnDestroy, Output, output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
  <div>
    <div class="row">
        <div class="col-xs-12">
            <button class="btn btn-primary" style="margin: 3px;" (click)="onStart()"> Start </button>
            <button class="btn btn-danger" (click)="onStop()">Stop</button>
        </div>
    </div>
</div>
`,
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnDestroy {


  @Output() startEvent = new EventEmitter<number>();
  @Output() stopEvent = new EventEmitter<number>();
  counter: number = 0;
  intervalId: any;


  ngOnDestroy() {
    this.onStop()
  }


  onStart() {
    this.intervalId = setInterval(() => {
      this.startEvent.emit(this.counter + 1);
      this.counter++;
   },1000)    
  }

  onStop() {
      clearInterval(this.intervalId);
  }
}
