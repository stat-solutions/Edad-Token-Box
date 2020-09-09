import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupPagesCoreComponent } from './group-pages-core/group-pages-core.component';
import { GroupDashboardComponent } from './components-group/group-dashboard/group-dashboard.component';
import { GroupAddMemberComponent } from './components-group/group-add-member/group-add-member.component';

const routes: Routes = [
   {
  path: '',
  component: GroupPagesCoreComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboardgroup'
    },

    {
      path: 'dashboardgroup',
     component: GroupDashboardComponent,
    },
    {
      path: 'addmembergroup',
     component: GroupAddMemberComponent,
    }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupUserDashboadRoutingModule { }
