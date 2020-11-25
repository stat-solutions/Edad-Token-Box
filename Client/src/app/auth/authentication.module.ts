import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterSmartAgentComponent } from './register/register-smart-agent/register-smart-agent.component';
import { RegisterSmartSaverComponent } from "./register/register-smart-saver/register-smart-saver.component";
import { RegisterGroupBoxComponent } from "./register/register-group-box/register-group-box.component";
import { RegisterBoxForGodComponent } from "./register/register-box-for-god/register-box-for-god.component";
import { RegisterSchoolFeesBoxComponent } from "./register/register-school-fees-box/register-school-fees-box.component";
import { AlertModule } from 'ngx-alerts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminRegisterComponent } from "./register/admin-register/admin-register.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { ProductsComponent } from './products/products.component';
import { VendorrAgentComponent } from './register/vendorr-agent/vendorr-agent.component';
import { CountdownBuyerComponent } from './register/countdown-buyer/countdown-buyer.component';
import { SmartBuyerComponent } from './register/smart-buyer/smart-buyer.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterSmartAgentComponent,
    RegisterBoxForGodComponent,
    RegisterGroupBoxComponent,
    RegisterSchoolFeesBoxComponent,
    RegisterSmartSaverComponent,
    AdminRegisterComponent,
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgotPinComponent,
    ProductsComponent,
    VendorrAgentComponent,
    CountdownBuyerComponent,
    SmartBuyerComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: "right" }),
    NgxSpinnerModule,
    BsDatepickerModule,
    JwBootstrapSwitchNg2Module,
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class AuthenticationModule {}
