import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
        private processHTTPMsg: ProcessHttpmsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get(); 
  }

  getFeturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
    .map(promotions => promotions[0]);
  }

}
