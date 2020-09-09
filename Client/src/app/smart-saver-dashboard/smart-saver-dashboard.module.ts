import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartSaverDashboardRoutingModule } from './smart-saver-dashboard-routing.module';


import { AddTokensComponent } from './components/add-tokens/add-tokens.component';
import { SaverNotificationsComponent } from './components/saver-notifications/saver-notifications.component';
import { PagesCoreSaverComponent } from './pages-core/pages-core-saver.component';
import { LeftPanelSaverComponent } from './common/left-panel/left-panel-saver.component';
import { RightPanelSaverComponent } from './common/right-panel/right-panel-saver.component';
import { HeaderSaverComponent } from './common/header/header-saver.component';
import { ContentSectionSaverComponent } from './content-section/content-section-saver.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTokensAgentComponent } from './components/add-tokens-agent/add-tokens-agent.component';
import { SaverDashboardComponent } from './components/saver-dashboard/saver-dashboard.component';
import { AlertModule } from 'ngx-alerts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { WithdrawSaverTokensComponent } from './components/withdraw-saver-tokens/withdraw-saver-tokens.component';
import { WithdrawSaverProfitComponent } from './components/withdraw-saver-profit/withdraw-saver-profit.component';

@NgModule({
  declarations: [
    PagesCoreSaverComponent,
    LeftPanelSaverComponent,
    RightPanelSaverComponent,
    HeaderSaverComponent,
    ContentSectionSaverComponent,
    SaverDashboardComponent,
    AddTokensComponent,
    SaverNotificationsComponent,
    AddTokensAgentComponent,
    WithdrawSaverTokensComponent,
    WithdrawSaverProfitComponent,

  ],
  imports: [
    CommonModule,
    SmartSaverDashboardRoutingModule,
    ReactiveFormsModule,
    AlertModule,
    NgxSpinnerModule,
    BsDatepickerModule
  ]
})
export class SmartSaverDashboardModule { }
