import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css', 

  //Global style without local encapsulation
  // encapsulation: ViewEncapsulation.None

  //For Native, it uses the traditional dom structuring
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit {

  //Assigning an alias to the input decorator 
  @Input('srvElement') element: { name: string, type: string, content: string }



  constructor(

  ) {

  }


  ngOnInit(): void {

  }

}
