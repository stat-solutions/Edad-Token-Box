import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreAgentComponent } from './pages-core/pages-core-agent.component';
import { AgentDashboardComponent } from './components/agent-dashboard/agent-dashboard.component';
import { TokenTransactionsComponent } from './components/token-transactions/token-transactions.component';
import { SellTokensComponent } from './components/sell-tokens/sell-tokens.component';
import { AddTokenStockComponent } from './components/add-token-stock/add-token-stock.component';
import { TransferTokensToSavingsBoxComponent } from './components/transfer-tokens-to-savings-box/transfer-tokens-to-savings-box.component';
import { WithdrawTokensComponent } from './components/withdraw-tokens/withdraw-tokens.component';
import { UpdateAgentProfileComponent } from './components/update-agent-profile/update-agent-profile.component';
import { AgentNotificationsComponent } from './components/agent-notifications/agent-notifications.component';
import { TheFinalDashboardComponent } from './components/agent-dashboard/the-final-dashboard/the-final-dashboard.component';
import { TheFinalDashboardSalesComponent } from './components/agent-dashboard/the-final-dashboard-sales/the-final-dashboard-sales.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreAgentComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboardAgent/theAgentDashboard'
      },

      {
        path: 'dashboardAgent',
       component: AgentDashboardComponent, children: [
        { path: 'theAgentDashboard', component: TheFinalDashboardComponent },
        { path: 'theAgentDashboardSales', component: TheFinalDashboardSalesComponent },
        // { path: 'revenue', component: RevenueComponent },
        // { path: 'stage', component: StageComponent },
        // { path: 'post', component: PostComponent },
        // { path: 'post_trn2', component: PostTrn2Component },
        // { path: 'viewsecrete', component: ViewCustomerScreteComponent },
        // { path: 'editcustomer/:name/:stage/:phone/:plate', component: EditClientComponent }
      ]
      },

      {
        path: 'tokentransactionsAgent',
       component: TokenTransactionsComponent,
      },
      {
        path: 'selltokensAgent',
       component: SellTokensComponent,
      },
      {
        path: 'addtokensAgent',
       component: AddTokenStockComponent,
      },
      {
        path: 'transfertokenstosavingsboxAgent',
       component: TransferTokensToSavingsBoxComponent,
      },
      {
        path: 'withdrawTokens',
       component: WithdrawTokensComponent,
      }
      // {
      //   path: 'withdrawTokens',
      //  component: WithdrawTokensComponent,
      // },
      ,
      {
        path: 'updateagentprofileAgent',
       component: UpdateAgentProfileComponent,
      }
      ,
      {
        path: 'notificationsAgent',
       component: AgentNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartAgentDashboardRoutingModule { }
