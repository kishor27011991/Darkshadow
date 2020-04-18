 import { Component, OnInit,Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
// //import { humanizeBytes } from 'ng-uikit-pro-standard';

 @Component({
   selector: 'app-restore',
   templateUrl:'./restore.component.html',
   styleUrls: ['./restore.component.scss']
 })
 export class RestoreComponent implements OnInit {
  form: FormGroup;

  constructor() { }
   
  @Input() accept: string;
  @Output() onFileSelect: EventEmitter<File[]> = new EventEmitter();

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  private _files: File[];

  get fileCount(): number { return this._files && this._files.length || 0; }

  onNativeInputFileSelect($event) {
      this._files = $event.srcElement.files;
      this.onFileSelect.emit(this._files);
  }

  selectFile() {
      this.nativeInputFile.nativeElement.click();
  }
  
  
  
  ngOnInit(): void {
   }

 }
