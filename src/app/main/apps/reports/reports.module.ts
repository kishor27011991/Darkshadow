import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ChecklistModule } from './checklist/checklist.module';
import { MailinglistComponent } from './mailinglist/mailinglist.component';
import { ProoflistComponent } from './prooflist/prooflist.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { MonthlylistComponent } from './monthlylist/monthlylist.component';
import { ReminderlistComponent } from './reminderlist/reminderlist.component';
import { CollectorlistComponent } from './collectorlist/collectorlist.component';
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
      path     : 'reports/checklist',
      component: ChecklistComponent
  },
  {
    path     : 'reports/collectorlist',
    component: CollectorlistComponent
},
{
  path     : 'reports/mailinglist',
  component: MailinglistComponent
},
{
  path     : 'reports/monthlylist',
  component: MonthlylistComponent
},
{
  path     : 'reports/prooflist',
  component: ProoflistComponent
},
{
  path     : 'reports/reminderlist',
  component: ReminderlistComponent 
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
export class ReportsModule { }
