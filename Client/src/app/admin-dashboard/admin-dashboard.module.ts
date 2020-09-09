import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PagesCoreadminComponent } from './pages-core/pages-core-admin.component';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TokenTransactionsComponent } from './components/token-transactions/token-transactions.component';
import { AddTokenStockComponent } from './components/add-token-stock/add-token-stock.component';
import { TransferTokensToSavingsBoxComponent } from './components/transfer-tokens-to-savings-box/transfer-tokens-to-savings-box.component';
import { UpdateadminProfileComponent } from './components/update-admin-profile/update-admin-profile.component';
import { SellTokensComponent } from './components/sell-tokens/sell-tokens.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftPaneladminComponent } from './common/left-panel/left-panel-admin.component';
import { RightPaneladminComponent } from './common/right-panel/right-panel-admin.component';
import { HeaderadminComponent } from './common/header/header-admin.component';
import { ContentSectionadminComponent } from './content-section/content-section-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminNotificationsComponent } from './components/admin-notifications/admin-notifications.component';
import { AlertModule } from 'ngx-alerts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ApproveTokenPurchasesComponent } from './components/admin-dashboard/approve-token-purchases/approve-token-purchases.component';
import { ApproveTokenWithdrawsComponent } from './components/admin-dashboard/approve-token-withdraws/approve-token-withdraws.component';

@NgModule({
  declarations: [
    PagesCoreadminComponent,
    LeftPaneladminComponent,
    RightPaneladminComponent,
    HeaderadminComponent,
    ContentSectionadminComponent,
    AuthenticationComponent,
    AdminDashboardComponent,

    TokenTransactionsComponent,
    AddTokenStockComponent,
    TransferTokensToSavingsBoxComponent,
    UpdateadminProfileComponent,
    AdminNotificationsComponent,
    SellTokensComponent,
    ApproveTokenPurchasesComponent,
    ApproveTokenWithdrawsComponent,

  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'}),
    NgxSpinnerModule,
    BsDatepickerModule,
    ReactiveFormsModule
  ]
})
export class AdminDashboardModule { }
