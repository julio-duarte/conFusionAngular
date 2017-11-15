import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular,
            private processHTTPMsg: ProcessHttpmsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList(); 
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get(); 
  }

  getFeturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
        .map(promotions => promotions[0]);
  }

}
