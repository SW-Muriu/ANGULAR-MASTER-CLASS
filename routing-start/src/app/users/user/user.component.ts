import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    //This does not change when changed in the page, since the page is already rendered
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    //Using an observable, to detect any changes passed in the observable
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name']
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();  
  }
}
