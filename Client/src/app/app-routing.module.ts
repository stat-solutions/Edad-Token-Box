import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'authpage', redirectTo: '/authpage/loginpage', pathMatch: 'full' },
  { path: '', redirectTo: '/authpage/loginpage', pathMatch: 'full' },
  // {
  //   path: 'authpage',
  //   loadChildren: () => import('./auth/authentication.module').then(m => m.AuthenticationModule)
  // },

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  {
    path: 'smartagent',
    loadChildren: () => import('./smart-agent-dashboard/smart-agent-dashboard.module').then(m => m.SmartAgentDashboardModule)
  },
  // {
  //   path: 'smartvendor',
  //   loadChildren: () => import('./').then(m => m.SmartAgentDashboardModule)
  // },
  {
    path: 'smartsaver',
    loadChildren: () => import('./smart-saver-dashboard/smart-saver-dashboard.module').then(m => m.SmartSaverDashboardModule)
  },

  {
    path: 'smartgroup',
    loadChildren: () => import('./group-user-dashboad/group-user-dashboad.module').then(m => m.GroupUserDashboadModule)
  },
  {
    path: 'superuser',

    loadChildren: () => import('./super-user-dashboard/super-user-dashboard.module').then(m => m.SuperUserDashboardModule)
  }
  ,
  {
    path: 'admindashboard',

    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
