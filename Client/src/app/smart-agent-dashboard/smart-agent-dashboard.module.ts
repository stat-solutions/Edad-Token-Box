import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartAgentDashboardRoutingModule } from './smart-agent-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreAgentComponent } from './pages-core/pages-core-agent.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AgentDashboardComponent } from './components/agent-dashboard/agent-dashboard.component';
import { TokenTransactionsComponent } from './components/token-transactions/token-transactions.component';
import { AddTokenStockComponent } from './components/add-token-stock/add-token-stock.component';
import { TransferTokensToSavingsBoxComponent } from './components/transfer-tokens-to-savings-box/transfer-tokens-to-savings-box.component';
import { WithdrawTokensComponent } from './components/withdraw-tokens/withdraw-tokens.component';
import { UpdateAgentProfileComponent } from './components/update-agent-profile/update-agent-profile.component';
import { AgentNotificationsComponent } from './components/agent-notifications/agent-notifications.component';
import { SellTokensComponent } from './components/sell-tokens/sell-tokens.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPanelAgentComponent } from './common/left-panel/left-panel-agent.component';
import { RightPanelAgentComponent } from './common/right-panel/right-panel-agent.component';
import { HeaderAgentComponent } from './common/header/header-agent.component';
import { ContentSectionAgentComponent } from './content-section/content-section-agent.component';
import { TheFinalDashboardComponent } from './components/agent-dashboard/the-final-dashboard/the-final-dashboard.component';
import { TheFinalDashboardSalesComponent } from './components/agent-dashboard/the-final-dashboard-sales/the-final-dashboard-sales.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';

import { ModalModule } from 'ngx-bootstrap/modal';
import { WithdrawTokenCommissionComponent } from './components/withdraw-token-commission.component';


@NgModule({
  declarations: [
    PagesCoreAgentComponent,
    LeftPanelAgentComponent,
    RightPanelAgentComponent,
    HeaderAgentComponent,
    ContentSectionAgentComponent,
    AuthenticationComponent,
    AgentDashboardComponent,
    TokenTransactionsComponent,
    AddTokenStockComponent,
    TransferTokensToSavingsBoxComponent,
    WithdrawTokensComponent,
    UpdateAgentProfileComponent,
    AgentNotificationsComponent,
    SellTokensComponent,
    TheFinalDashboardComponent,
    TheFinalDashboardSalesComponent,
    WithdrawTokenCommissionComponent,

  ],
  imports: [
    CommonModule,
    SmartAgentDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'}),
NgxSpinnerModule,
  ],
})
export class SmartAgentDashboardModule { }
