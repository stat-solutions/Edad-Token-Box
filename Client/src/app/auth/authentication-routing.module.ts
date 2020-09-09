import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterSmartSaverComponent } from './register-smart-saver/register-smart-saver.component';
import { RegisterSmartAgentComponent } from './register-smart-agent/register-smart-agent.component';
import { RegisterSmartVendorComponent } from './register-smart-vendor/register-smart-vendor.component';
import { RegisterBoxForGodComponent } from './register-box-for-god/register-box-for-god.component';
import { RegisterGroupBoxComponent } from './register-group-box/register-group-box.component';
import { RegisterSchoolFeesBoxComponent } from './register-school-fees-box/register-school-fees-box.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';



const routes: Routes = [

  {
    path: 'authpage', component: AuthComponent, children: [

      { path: 'loginpage', component: LoginComponent },
      { path: 'registersmartsaver', component: RegisterSmartSaverComponent },
      { path: 'registersmartagent', component: RegisterSmartAgentComponent},
      { path: 'registersmartvendor', component: RegisterSmartVendorComponent},
      { path: 'registerboxforGod', component: RegisterBoxForGodComponent },
      { path: 'registergroupbox', component: RegisterGroupBoxComponent },
      { path: 'registerschoolfeesbox', component: RegisterSchoolFeesBoxComponent },
      { path: 'registeradmin', component: AdminRegisterComponent }
    ]
  }


];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})
export class AuthenticationRoutingModule { }
