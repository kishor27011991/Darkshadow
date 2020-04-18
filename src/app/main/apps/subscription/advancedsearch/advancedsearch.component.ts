import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.scss']
})
export class AdvancedsearchComponent implements OnInit {
  form: FormGroup;
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

}
