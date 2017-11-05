import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
    /*return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(DISHES), 2000);
    });*/
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 seconds delay
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    // });
  }

  getFeturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.featured === true))[0]).delay(2000);
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 seconds delay
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured === true))[0]), 2000);
    // });
  }

}
