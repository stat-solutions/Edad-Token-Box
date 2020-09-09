import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupUserDashboadRoutingModule } from './group-user-dashboad-routing.module';
import { HeaderGroupComponent } from './common-group/header-group/header-group.component';
import { LeftPanelGroupComponent } from './common-group/left-panel-group/left-panel-group.component';
import { RightPanelGroupComponent } from './common-group/right-panel-group/right-panel-group.component';
import { GroupDashboardComponent } from './components-group/group-dashboard/group-dashboard.component';
import { GroupContentSectionComponent } from './group-content-section/group-content-section.component';
import { GroupAddMemberComponent } from './components-group/group-add-member/group-add-member.component';
import { GroupPagesCoreComponent } from './group-pages-core/group-pages-core.component';


@NgModule({
  declarations: [
    HeaderGroupComponent,
     LeftPanelGroupComponent,
      RightPanelGroupComponent,
       GroupDashboardComponent,
        GroupContentSectionComponent,
        GroupAddMemberComponent,
        GroupPagesCoreComponent],
  imports: [
    CommonModule,
    GroupUserDashboadRoutingModule
  ]
})
export class GroupUserDashboadModule { }
