import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
  <div class="col-xs-12" style="background-color:aquamarine;">
    <h2>Odd Number</h2>
    <p>
        Odd Number: {{eventStarted}}
    </p>
</div>
  `,
  styleUrl: './odd.component.css'
})
export class OddComponent {

  @Input() eventStarted: number;

}
