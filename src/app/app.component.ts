import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../app/service/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;
  counterSubscription: Subscription;

  constructor() {
    this.secondes = 0;
    this.counterSubscription = new Subscription;
  }
  ngOnInit() {
      const counter = interval(1000);
      counter.subscribe(
        (value) => {
          this.secondes = value;
        },
        (error) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete!');
        }
      );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}


