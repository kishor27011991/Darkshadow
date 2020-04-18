import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CollectorComponent } from './collector/collector.component';
import { SalutationComponent } from './salutation/salutation.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { SubscriptiontypeComponent } from './subscriptiontype/subscriptiontype.component';
import { DeliverytypeComponent } from './deliverytype/deliverytype.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
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
      path     : 'master/collector',
      component: CollectorComponent
  },
  {
    path     : 'master/salutation',
    component: SalutationComponent
},
{
  path     : 'master/paymentmode',
  component: PaymentmodeComponent
},
{
  path     : 'master/subscriptiontype',
  component: SubscriptiontypeComponent
},
{
  path     : 'master/deliverytype',
  component: DeliverytypeComponent
},
{
  path     : 'master/country',
  component: CountryComponent
},
{
  path     : 'master/state',
  component: StateComponent
},
{
  path     : 'master/district',
  component: DistrictComponent 
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
export class MasterModule { }
