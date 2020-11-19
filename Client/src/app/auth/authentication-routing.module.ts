import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterSmartSaverComponent } from "./register/register-smart-saver/register-smart-saver.component";
import { RegisterSmartAgentComponent } from "./register/register-smart-agent/register-smart-agent.component";
import { RegisterSmartVendorComponent } from "./register/register-smart-vendor/register-smart-vendor.component";
import { RegisterBoxForGodComponent } from "./register/register-box-for-god/register-box-for-god.component";
import { RegisterGroupBoxComponent } from "./register/register-group-box/register-group-box.component";
import { RegisterSchoolFeesBoxComponent } from "./register/register-school-fees-box/register-school-fees-box.component";
import { AdminRegisterComponent } from './register/admin-register/admin-register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  {
    path: "authpage",
    component: AuthComponent,
    children: [
      { path: "loginpage", component: LoginComponent },
      { path: "forgotpin", component: ForgotPinComponent },
      { path: "products", component: ProductsComponent},
      { path: "register", component: RegisterComponent},
// children: [
      { path: "registersaver", component: RegisterSmartSaverComponent },
      { path: "registeragent", component: RegisterSmartAgentComponent },
      { path: "registervendor", component: RegisterSmartVendorComponent },
      { path: "registerGodbox", component: RegisterBoxForGodComponent },
      { path: "registergroupbox", component: RegisterGroupBoxComponent },
      {
        path: "registerschfeesbox",
        component: RegisterSchoolFeesBoxComponent,
      },
      { path: "registeradmin", component: AdminRegisterComponent }
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class AuthenticationRoutingModule { }
