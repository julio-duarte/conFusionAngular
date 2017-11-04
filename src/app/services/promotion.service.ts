import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: number): Promise<Promotion> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    });
  }

  getFeturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured === true))[0]), 2000);
    });
  }

}
