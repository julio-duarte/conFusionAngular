import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return Observable.of(PROMOTIONS).delay(2000);
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 seconds delay
    //   setTimeout(() => resolve(PROMOTIONS), 2000);
    // });
  }

  getPromotion(id: number): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 seconds delay
    //   setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    // });
  }

  getFeturedPromotion(): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promo) => (promo.featured === true))[0]).delay(2000);
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 seconds delay
    //   setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured === true))[0]), 2000);
    // });
  }

}
