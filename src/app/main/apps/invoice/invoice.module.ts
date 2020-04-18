import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewinvoiceComponent } from './newinvoice/newinvoice.component';
import { RouterModule } from '@angular/router';
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
      path     : 'invoice/newinvoice',
      component: NewinvoiceComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
export class InvoiceModule { }
