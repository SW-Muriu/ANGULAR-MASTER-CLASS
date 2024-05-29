import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  serverElements = [
    {
      type: 'server',
      name: 'Testserver',
      content: 'Just a test'
    }
  ];

  onServerCreated(eventData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

  onBlueprintCreated(eventData: { serverName: string, serverContent: string }) {
    console.log("Touching", eventData)
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent
    });
    console.log("ASDAS", this.serverElements)
  }

}
