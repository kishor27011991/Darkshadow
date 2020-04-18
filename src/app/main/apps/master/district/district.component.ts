import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  form: FormGroup;
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
  }

}
