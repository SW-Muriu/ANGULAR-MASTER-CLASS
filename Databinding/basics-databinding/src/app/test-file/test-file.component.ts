import { Component } from '@angular/core';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrl: './test-file.component.css'
})
export class TestFileComponent {


  names: string[] = ["Name 1", "Name 2"];

  ngOnInit(): void {
    console.log("Test File Component");
  }

}
