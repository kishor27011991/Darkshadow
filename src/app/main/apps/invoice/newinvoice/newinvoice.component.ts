import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-newinvoice',
  templateUrl: './newinvoice.component.html',
  styleUrls: ['./newinvoice.component.scss']
})
export class NewinvoiceComponent implements OnInit {
 form: FormGroup;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
