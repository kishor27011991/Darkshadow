// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-deletesubscriber',
//   templateUrl:'./deletesubscriber.component.html',
//   styleUrls: ['./deletesubscriber.component.scss']
// })
// export class DeletesubscriberComponent implements OnInit {
//   form: FormGroup;
//   constructor(private _formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
     selector: 'app-deletesubscriber',
     templateUrl:'./deletesubscriber.component.html',
    styleUrls: ['./deletesubscriber.component.scss']
   })
export class DeletesubscriberComponent implements OnInit {
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
      
      firstName : ['', Validators.required],
      lastName  : ['', Validators.required],
      address   : ['', Validators.required],
      address2  : ['', Validators.required],
      city      : ['', Validators.required],
      state     : ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]],
      country   : ['', Validators.required]
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




  

}

