import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component',
  template: `
    <button (click)="click()">Click me!</button>
    <div>{{message}}</div>
  `
})
export class MyComponent {
  message: string;
  myObservable: Observable<string>;

  constructor() {
    this.myObservable = new Observable(subscriber => {
      setTimeout(() => subscriber.next('Hello'), 1000);
      setTimeout(() => subscriber.next('world'), 2000);
      setTimeout(() => subscriber.complete(), 3000);
    });
  }

  click() {
    this.myObservable.subscribe(value => this.message = value);
  }
}