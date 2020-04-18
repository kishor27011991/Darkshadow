import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackupComponent } from './backup/backup.component';
import { RestoreComponent } from './restore/restore.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes = [
  {
      path     : 'administration/backup',
      component: BackupComponent
  },
  {
    path     : 'administration/restore',
    component: RestoreComponent
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
         MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatSelectModule,
        MatStepperModule,
        FuseSharedModule,
        MatFormFieldModule,
        MatInputModule,
  ]
})
export class AdministrationModule { }
