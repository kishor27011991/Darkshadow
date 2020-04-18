import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-archivesearch',
  templateUrl: './archivesearch.component.html',
  styleUrls: ['./archivesearch.component.scss']
})
export class ArchivesearchComponent implements OnInit {
  form: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
