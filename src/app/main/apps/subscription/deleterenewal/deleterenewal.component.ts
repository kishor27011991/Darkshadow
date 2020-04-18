import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleterenewal',
  templateUrl:'./deleterenewal.component.html',
  styleUrls: ['./deleterenewal.component.scss']
})
export class DeleterenewalComponent implements OnInit {
  form: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
