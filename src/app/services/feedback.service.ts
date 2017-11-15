import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Feedback } from '../shared/feedback';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/of';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
    private processHttpmsgService: ProcessHttpmsgService) { }

  submitFeedback(feedback: Feedback) {
    
    return this.restangular.all('feedback').post(feedback);
    
  }
 
}
;