import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperDashboardComponent } from './components/super-dashboard/super-dashboard.component';
import { SuperUserNotificationsComponent } from './components/super-user-notifications/super-user-notifications.component';
import { PagesCore1Component } from './pages-core1/pages-core1.component';
import { CreateAccountComponent } from './components/super-dashboard/create-account/create-account.component';
import { CreateChartAccountComponent } from './components/super-dashboard/create-chart-account/create-chart-account.component';
import { ApproveAdminUserComponent } from './components/super-dashboard/approve-admin-user/approve-admin-user.component';


const routes: Routes = [
  {
    path: '',
    component: PagesCore1Component,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'thesuperdashboard'
      },

      {
        path: 'thesuperdashboard',
       component: SuperDashboardComponent, children: [
        { path: 'createchartaccount', component: CreateChartAccountComponent },
        { path: 'createaccount', component: CreateAccountComponent },

        { path: 'approveadminuser', component: ApproveAdminUserComponent },
        // { path: 'revenue', component: RevenueComponent },
        // { path: 'stage', component: StageComponent },
        // { path: 'post', component: PostComponent },
        // { path: 'post_trn2', component: PostTrn2Component },
        // { path: 'viewsecrete', component: ViewCustomerScreteComponent },
        // { path: 'editcustomer/:name/:stage/:phone/:plate', component: EditClientComponent }
      ]
      },
      {
        path: 'supernotifications',
       component: SuperUserNotificationsComponent,
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperUserDashboardRoutingModule { }
