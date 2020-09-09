import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperUserDashboardRoutingModule } from './super-user-dashboard-routing.module';
import { SuperUserNotificationsComponent } from './components/super-user-notifications/super-user-notifications.component';
import { SuperDashboardComponent } from './components/super-dashboard/super-dashboard.component';
import { PagesCore1Component } from './pages-core1/pages-core1.component';
import { LeftPanel1Component } from './common/left-panel/left-panel1.component';
import { ContentSection1Component } from './content-section/content-section1.component';
import { Header1Component } from './common/header/header1.component';
import { RightPanel1Component } from './common/right-panel/right-panel1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateAccountComponent } from './components/super-dashboard/create-account/create-account.component';
import { CreateChartAccountComponent } from './components/super-dashboard/create-chart-account/create-chart-account.component';
import { ApproveAdminUserComponent } from './components/super-dashboard/approve-admin-user/approve-admin-user.component';


@NgModule({
  declarations: [
    PagesCore1Component,
    LeftPanel1Component,
    RightPanel1Component,
    ContentSection1Component,
    SuperUserNotificationsComponent,
    SuperDashboardComponent,
    Header1Component,
    CreateAccountComponent,
    CreateChartAccountComponent,
    ApproveAdminUserComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuperUserDashboardRoutingModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'}),
    NgxSpinnerModule,
    BsDatepickerModule
  ]
})
export class SuperUserDashboardModule { }
