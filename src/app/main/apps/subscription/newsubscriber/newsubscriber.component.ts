import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsubscriber',
  templateUrl:'./newsubscriber.component.html',
  styleUrls: ['./newsubscriber.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class NewsubscriberComponent implements OnInit {
  form: FormGroup;

    // Horizontal Stepper
    horizontalStepperStep1: FormGroup;
    horizontalStepperStep2: FormGroup;
    horizontalStepperStep3: FormGroup;

    // Vertical Stepper
    verticalStepperStep1: FormGroup;
    verticalStepperStep2: FormGroup;
    verticalStepperStep3: FormGroup;

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      company   : [
          {
              value   : 'Google',
              disabled: true
          }, Validators.required
      ],
      firstName : ['', Validators.required],
      lastName  : ['', Validators.required],
      address   : ['', Validators.required],
      address2  : ['', Validators.required],
      city      : ['', Validators.required],
      state     : ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]],
      country   : ['', Validators.required]
  });

  // Horizontal Stepper form steps
  this.horizontalStepperStep1 = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName : ['', Validators.required]
  });

  this.horizontalStepperStep2 = this._formBuilder.group({
      address: ['', Validators.required]
  });

  this.horizontalStepperStep3 = this._formBuilder.group({
      city      : ['', Validators.required],
      state     : ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]]
  });

  // Vertical Stepper form stepper
  this.verticalStepperStep1 = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName : ['', Validators.required]
  });

  this.verticalStepperStep2 = this._formBuilder.group({
      address: ['', Validators.required]
  });

  this.verticalStepperStep3 = this._formBuilder.group({
      city      : ['', Validators.required],
      state     : ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]]
  });
}

/**
* On destroy
*/
ngOnDestroy(): void
{
  // Unsubscribe from all subscriptions
  // this._unsubscribeAll.next();
  // this._unsubscribeAll.complete();
}

// -----------------------------------------------------------------------------------------------------
// @ Public methods
// -----------------------------------------------------------------------------------------------------

/**
* Finish the horizontal stepper
*/
finishHorizontalStepper(): void
{
  alert('You have finished the horizontal stepper!');
}

/**
* Finish the vertical stepper
*/
finishVerticalStepper(): void
{
  alert('You have finished the vertical stepper!');
}
  

}
