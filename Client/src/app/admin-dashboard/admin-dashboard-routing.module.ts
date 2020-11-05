import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreadminComponent } from './pages-core/pages-core-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TokenTransactionsComponent } from './components/token-transactions/token-transactions.component';
import { SellTokensComponent } from './components/sell-tokens/sell-tokens.component';
import { AddTokenStockComponent } from './components/add-token-stock/add-token-stock.component';
import { TransferTokensToSavingsBoxComponent } from './components/transfer-tokens-to-savings-box/transfer-tokens-to-savings-box.component';
import { UpdateadminProfileComponent } from './components/update-admin-profile/update-admin-profile.component';
import { AdminNotificationsComponent } from './components/admin-notifications/admin-notifications.component';
import { ApproveTokenPurchasesComponent } from './components/admin-dashboard/approve-token-purchases/approve-token-purchases.component';
import { ApproveTokenWithdrawsComponent } from './components/admin-dashboard/approve-token-withdraws/approve-token-withdraws.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreadminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboardadmin'
      },

      {
        path: 'dashboardadmin',
       component: AdminDashboardComponent},
 {
          path: 'approvetokenpurchases',
         component: ApproveTokenPurchasesComponent,
        },
        {
          path: 'approvetokenwithdraws',
         component: ApproveTokenWithdrawsComponent,
      },
      {
        path: 'posttransactions',
       component: TokenTransactionsComponent,
      },
      {
        path: 'reports',
       component: SellTokensComponent,
      },
      {
        path: 'addtokens',
       component: AddTokenStockComponent,
      },
      {
        path: 'transfertokenstosavingsbox',
       component: TransferTokensToSavingsBoxComponent,
      }
      // {
      //   path: 'withdrawTokens',
      //  component: WithdrawTokensComponent,
      // },
      ,
      {
        path: 'updateadminprofile',
       component: UpdateadminProfileComponent,
      }
      ,
      {
        path: 'notifications',
       component: AdminNotificationsComponent,
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
