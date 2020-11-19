import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartSaverDashboardComponent } from './smart-saver-dashboard/smart-saver-dashboard.component';
import { SmartSaversComponent } from './smart-savers.component';


const routes: Routes = [

      {
        path: 'smartsavers',
       component: SmartSaversComponent,
       children: [
      {
        path: 'saversdashboard',
       component: SmartSaverDashboardComponent,
      }
    ]

  }
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartSaversRoutingModule { }
