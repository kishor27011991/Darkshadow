import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FuseSharedModule } from '@fuse/shared.module';
import  {RestoreComponent} from 'app/main/apps/administration/restore/restore.component';
//import { MatFileUploadModule } from 'angular-material-fileupload';


@NgModule({
  declarations: [RestoreComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
   // MatFileUploadModule,
    FuseSharedModule,
  ],
  exports: [
    MatInputModule
]
})
export class RestoreModule { }
