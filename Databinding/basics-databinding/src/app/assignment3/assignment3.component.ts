import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component {


  displayParagraph: boolean = true;
  // logItems: number[] = [];
  dates =[]



  toggleParagraph(): void {
    (this.displayParagraph != false) ? this.displayParagraph = false : this.displayParagraph = true;
    // this.logItems.push(this.logItems.length + 1)
    this.dates.push(new Date)
  }

}
