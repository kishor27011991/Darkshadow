import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsubscriberComponent } from 'app/main/apps/subscription/newsubscriber/newsubscriber.component';
import { AdvancedsearchComponent } from 'app/main/apps/subscription/advancedsearch/advancedsearch.component';
import { ArchivesearchComponent } from 'app/main/apps/subscription/archivesearch/archivesearch.component';
import { DeletesubscriberComponent } from 'app/main/apps/subscription/deletesubscriber/deletesubscriber.component';
import { DeleterenewalComponent } from 'app/main/apps/subscription/deleterenewal/deleterenewal.component';
import {SuspendactivatesubscriberComponent } from 'app/main/apps/subscription/suspendactivatesubscriber/suspendactivatesubscriber.component';
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
      path     : 'subscription/newsubscriber',
      component: NewsubscriberComponent
  },
  {
    path     : 'subscription/advancedsearch',
    component: AdvancedsearchComponent
   },
   {
    path     : 'subscription/archivesearch',
    component: ArchivesearchComponent
   },
  {
       path     : 'subscription/deleterenewal',
       component: DeleterenewalComponent
  },
   {
      path     : 'subscription/deletesubscriber',
       component: DeletesubscriberComponent
   },
  {
         path     : 'subscription/suspendactivatesubscriber',
         component: SuspendactivatesubscriberComponent
   }
];

@NgModule({
  declarations: [NewsubscriberComponent,AdvancedsearchComponent,ArchivesearchComponent,DeleterenewalComponent,DeletesubscriberComponent,SuspendactivatesubscriberComponent],
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
export class SubscriptionModule { }
