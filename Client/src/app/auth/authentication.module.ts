import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterSmartVendorComponent } from './register-smart-vendor/register-smart-vendor.component';
import { RegisterGroupBoxComponent } from './register-group-box/register-group-box.component';
import { AlertModule } from 'ngx-alerts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminRegisterComponent } from './admin-register/admin-register.component';


@NgModule({
  declarations: [AuthComponent,
     RegisterSmartVendorComponent,
     RegisterGroupBoxComponent,
     AdminRegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'}),
    NgxSpinnerModule,
    BsDatepickerModule,
    JwBootstrapSwitchNg2Module,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class AuthenticationModule { }
