import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ReportsModule } from './reports/reports.module';
import { MasterModule} from './master/master.module';
import { AdministrationModule } from './administration/administration.module';
import { SubscriptionModule } from './subscription/subscription.module';

const routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: () => import('./dashboards/analytics/analytics.module').then(m => m.AnalyticsDashboardModule)
    },
    {
        path        : 'dashboards/project',
        loadChildren: () => import('./dashboards/project/project.module').then(m => m.ProjectDashboardModule)
    },
    {
        path        : 'mail',
        loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)
    },
    {
        path        : 'mail-ngrx',
        loadChildren: () => import('./mail-ngrx/mail.module').then(m => m.MailNgrxModule)
    },
    {
        path        : 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
    },
    {
        path        : 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
    },
    {
        path        : 'e-commerce',
        loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.EcommerceModule)
    },
    {
        path        : 'academy',
        loadChildren: () => import('./academy/academy.module').then(m => m.AcademyModule)
    },
    {
        path        : 'administration',
        loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
    },
    {
        path        : 'invoice/newinvoice',
        loadChildren: () => import('./invoice/newinvoice/newinvoice.module').then(m => m.NewinvoiceModule)
    },
    {
        path        : 'subscription/newsubscriber',
        loadChildren: () => import('./subscription/newsubscriber/newsubscriber.module').then(m => m.NewsubscriberModule)
    },
    {
        path        : 'subscription/advancedsearch',
        loadChildren: () => import('./subscription/advancedsearch/advancedsearch.module').then(m => m.AdvancedsearchModule)
    },
    {
        path        : 'subscription/archivesearch',
        loadChildren: () => import('./subscription/archivesearch/archivesearch.module').then(m => m.ArchivesearchModule)
    },
    {
        path        : 'subscription/deletesubscriber',
        loadChildren: () => import('./subscription/deletesubscriber/deletesubscriber.module').then(m => m.DeletesubscriberModule)
    },
    {
        path        : 'subscription/deleterenewal',
        loadChildren: () => import('./subscription/deleterenewal/deleterenewal.module').then(m => m.DeleterenewalModule)
    },
    {
        path        : 'subscription/suspendactivatesubscriber',
        loadChildren: () => import('./subscription/suspendactivatesubscriber/suspendactivatesubscriber.module').then(m => m.SuspendactivatesubscriberModule)
    },
    {
        path        : 'reports/checklist',
        loadChildren: () => import('./reports/checklist/checklist.module').then(m => m.ChecklistModule)
    },
    {
        path        : 'reports/collectorlist',
        loadChildren: () => import('./reports/collectorlist/collectorlist.module').then(m => m.CollectorlistModule)
    },
    {
        path        : 'reports/mailinglist',
        loadChildren: () => import('./reports/mailinglist/mailinglist.module').then(m => m.MailinglistModule)
    },
    {
        path        : 'reports/monthlylist',
        loadChildren: () => import('./reports/monthlylist/monthlylist.module').then(m => m.MonthlylistModule)
    },
    {
        path        : 'reports/prooflist',
        loadChildren: () => import('./reports/prooflist/prooflist.module').then(m => m.ProoflistModule)
    },
    {
        path        : 'reports/reminderlist',
        loadChildren: () => import('./reports/reminderlist/reminderlist.module').then(m => m.ReminderlistModule)
    },
    // {
    //     path        : 'invoice',
    //     loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
    // },
    {
        path        : 'master/collector',
        loadChildren: () => import('./master/collector/collector.module').then(m => m.CollectorModule)
    },
    {
        path        : 'master/subscriptiontype',
        loadChildren: () => import('./master/subscriptiontype/subscriptiontype.module').then(m => m.SubscriptiontypeModule)
    },
    {
        path        : 'master/country',
        loadChildren: () => import('./master/country/country.module').then(m => m.CountryModule)
    },
    {
        path        : 'master/deliverytype',
        loadChildren: () => import('./master/deliverytype/deliverytype.module').then(m => m.DeliverytypeModule)
    },
    {
        path        : 'master/district',
        loadChildren: () => import('./master/district/district.module').then(m => m.DistrictModule)
    },
    {
        path        : 'master/paymentmode',
        loadChildren: () => import('./master/paymentmode/paymentmode.module').then(m => m.PaymentmodeModule)
    },
    {
        path        : 'master/salutation',
        loadChildren: () => import('./master/salutation/salutation.module').then(m => m.SalutationModule)
    },
    {
        path        : 'master/state',
        loadChildren: () => import('./master/state/state.module').then(m => m.StateModule)
    },

    {
        path        : 'administration/backup',
        loadChildren: () => import('./administration/backup/backup.module').then(m => m.BackupModule)
    },
    {
        path        : 'administration/restore',
        loadChildren: () => import('./administration/restore/restore.module').then(m => m.RestoreModule)
    },


    {
        path        : 'todo',
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
    },
    {
        path        : 'file-manager',
        loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule)
    },
    {
        path        : 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
        path        : 'scrumboard',
        loadChildren: () => import('./scrumboard/scrumboard.module').then(m => m.ScrumboardModule)
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule,
        ReportsModule,
        InvoiceModule,
        MasterModule,
        AdministrationModule,
        SubscriptionModule,
    ],
    declarations: [ ]
})
export class AppsModule
{
}
