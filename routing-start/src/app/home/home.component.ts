import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoadServers(id: number): void{

    //Using absolute paths. Check relative paths in the servers component
    const route = '/servers';
    this.router.navigate([route, id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading'
    });
  }

}
