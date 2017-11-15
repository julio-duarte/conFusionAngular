import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { visibility, flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()  
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  feedbackret: Feedback;
  contactType = ContactType;

  feedbackErrMess: string;
  

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'First Name cannot be more than 25 characters long.'
    },
    'lastname': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 25 characters long.'
    },    
    'telnum': {
      'required': 'Tel. Number is required.',
      'pattern': 'Tel. Number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valida format.'
    }
  };

  //,
  //private feedbackservice: FeedbackService,
  //@Inject('BaseURL') private BaseURL

  

  constructor(private fb: FormBuilder,
    private feedbackservice: FeedbackService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {

    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); //(re)set form validation messages

  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }


  _edit: boolean = true;
  _show: boolean = false;
  _wait: boolean = false;

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);

    this.feedbackret = null;
    this._edit = false; this._wait = true; this._show = false;

    alert(1);
    this.feedbackservice.submitFeedback(this.feedback)
      .subscribe(feedback => { 
        this.feedbackret = feedback; 
        this._edit = false; this._wait = false; this._show = true;
        setTimeout(()=> { this._edit = true; this._wait = false; this._show = false;}, 5000);

      });
    this.feedbackret = null;
alert(3);
    
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

  }

}
