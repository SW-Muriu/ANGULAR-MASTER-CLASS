import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
  <div class="col-xs-12" style="background-color: aqua;">
    <h2>Even Number</h2>
    <p>
       Even Number: {{eventStarted}}
    </p>
</div>
  `,
  styleUrl: './even.component.css'
})
export class EvenComponent {

  @Input() eventStarted: number;
  ngOnInit() {
  }
}
