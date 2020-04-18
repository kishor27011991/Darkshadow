import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suspendactivatesubscriber',
  templateUrl: './suspendactivatesubscriber.component.html',
  styleUrls: ['./suspendactivatesubscriber.component.scss']
})
export class SuspendactivatesubscriberComponent implements OnInit {
  form: FormGroup;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
    firstName : ['', Validators.required]
    });
  }

}
