import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTokensComponent } from './components/add-tokens/add-tokens.component';
import { SaverNotificationsComponent } from './components/saver-notifications/saver-notifications.component';
import { PagesCoreSaverComponent } from './pages-core/pages-core-saver.component';
import { AddTokensAgentComponent } from './components/add-tokens-agent/add-tokens-agent.component';
import { SaverDashboardComponent } from './components/saver-dashboard/saver-dashboard.component';
import { WithdrawSaverTokensComponent } from './components/withdraw-saver-tokens/withdraw-saver-tokens.component';
import { WithdrawSaverProfitComponent } from './components/withdraw-saver-profit/withdraw-saver-profit.component';


const routes: Routes = [

  {
    path: '',
    component: PagesCoreSaverComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'saverdashboard'
      },

      {
        path: 'saverdashboard',
       component: SaverDashboardComponent,
      },
      {
        path: 'addsaverstokens',
       component: AddTokensComponent,
      },

      {
        path: 'addtokensagent',
       component: AddTokensAgentComponent,
      }
      ,
      {
        path: 'withdrawsaverstokens',
       component: WithdrawSaverTokensComponent,
      }

      ,
      {
        path: 'withdrawsaversprofit',
       component: WithdrawSaverProfitComponent,
      }
      ,
      {
        path: 'saverNotifications',
       component: SaverNotificationsComponent,
      }


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartSaverDashboardRoutingModule { }
