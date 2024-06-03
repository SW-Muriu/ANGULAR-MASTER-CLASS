import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {

  serverElements = [];
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentinput: ElementRef;

  //Property declaration
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  constructor() {
    
  }


  ngOnInit(): void {
    
  }


  // onAddServer() {
  //   console.log("HTTING BUTTON")
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(this.serverContentinput)
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentinput.nativeElement.value
  })  
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentinput.nativeElement.value
    })
  }

}
