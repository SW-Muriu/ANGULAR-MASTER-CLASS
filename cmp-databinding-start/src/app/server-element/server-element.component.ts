import { getLocaleFirstDayOfWeek } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css', 

  //Global style without local encapsulation
  // encapsulation: ViewEncapsulation.None

  //For Native, it uses the traditional dom structuring
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked  {

  //Assigning an alias to the input decorator 
  @Input('srvElement') element: { name: string, type: string, content: string }

  @Input() name: string;



  constructor(


  ) {
    console.log("Constructor called");
  }

  //The only hook that takes in an argument
  ngOnChanges(changes: SimpleChanges) {
    console.log('Ng on changes called', changes);
    
  }

  ngDoCheck() {
    console.log("Ng Do Check called");
  }

  ngOnInit(): void {
    console.log('NgOnInit Called');
  }

  ngAfterContentInit() {
    console.log("Ng after content init called");
  }

  ngAfterContentChecked() {
    console.log("Ng after content checked called");
  }


  ngAfterViewInit() {
    console.log("Ng after view init called");
  }


  ngAfterViewChecked() {
    console.log("Ng after view checked called");
  }

  ngOnDestroy() {
    console.log("Ng on destroy called");
    
  }
}
