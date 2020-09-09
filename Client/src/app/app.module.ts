
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { SuperUserDashboardModule } from './super-user-dashboard/super-user-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { SmartAgentDashboardModule } from './smart-agent-dashboard/smart-agent-dashboard.module';
import { SmartSaverDashboardModule } from './smart-saver-dashboard/smart-saver-dashboard.module';
import { AuthenticationModule } from './auth/authentication.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSmartSaverComponent } from './auth/register-smart-saver/register-smart-saver.component';
import { RegisterSmartAgentComponent } from './auth/register-smart-agent/register-smart-agent.component';
import { RegisterBoxForGodComponent } from './auth/register-box-for-god/register-box-for-god.component';
import { RegisterSchoolFeesBoxComponent } from './auth/register-school-fees-box/register-school-fees-box.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { GroupUserDashboadModule } from './group-user-dashboad/group-user-dashboad.module';
import { RequestInterceptorServiceService } from './shared/services/request-interceptor-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterSmartSaverComponent,
    RegisterSmartAgentComponent,
    RegisterBoxForGodComponent,
    RegisterSchoolFeesBoxComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    SuperUserDashboardModule,
    AdminDashboardModule,
    SmartAgentDashboardModule,
    SmartSaverDashboardModule,
    AuthenticationModule,
    ReactiveFormsModule,
    SmartSaverDashboardModule,
    AlertModule,
    NgxSpinnerModule,
    HttpClientModule,
    BsDatepickerModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    GroupUserDashboadModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptorServiceService,
  multi: true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
