import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { AccountLevel2 } from 'src/app/shared/models/account-level-2';
import { AdminDashboardService } from 'src/app/shared/services/admin-dashboard.service';
import * as jwt_decode from 'jwt-decode';
import { AdminApprovalDetails } from 'src/app/shared/models/admin-approval-details';
import { UserRole } from '../../../shared/models/user-role';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    registered = false;
    submitted = false;
    errored = false;
    posted = false;
    userForm: FormGroup;
    loginStatus: string;
    value: string;
    stationBalanceExits: boolean;
    mySubscription: any;
    userRoleInfo1: UserRole[];
    userRoleInf: any = {};
    serviceErrors: any = {};
    userRolesPresent: boolean;
    roleId: number;
      loggedInPumpUser: boolean;
      loggedInAdminUser: boolean;
      loggedIn: boolean;

      imageUrl = './assets/blimassLead.jpg';
      boxUsage = 'Loans';
      usage = ['View Loans'];
      boxUsage2 = 'Revenue';
      usage2 = ['Check Revenues'];

      boxUsage3 = 'Clients';
      usage3 = ['Check Clients'];

      isCollapsed: boolean;

      toggleClass: string;

      boxUsage12 = 'Loans';
      usage12 = ['View Loans'];

      constructor(

      ) {}

      ngOnInit() {
        this.userForm = this.createFormGroup();
        this.toggleArial();


      }


      createFormGroup() {

        return new FormGroup({
          main_contact_number: new FormControl(
            '',
            Validators.compose([
              Validators.required,
              // CustomValidator.patternValidator(/\d/, { hasNumber: true }),
              Validators.maxLength(10),
              Validators.minLength(10)
            ])
          ),

          user_role_name: new FormControl(
            { value: '', disabled: true },
            Validators.compose([
              Validators.required

            ])
          ),
          user_role_id: new FormControl(
            { value: '', disabled: true },
            Validators.compose([
              Validators.required

            ])
          ),
          password: new FormControl(
            '',
            Validators.compose([
              // 1. Password Field is Required

              Validators.required
            ])
          )
        });
      }

      // revert() {
      //   this.userForm.reset();
      // }

      get fval() {
        return this.userForm.controls;
      }


      toggleArial() {
        this.isCollapsed = !this.isCollapsed;
        this.toggletheClass(this.isCollapsed);
      }

      toggletheClass(theTogler: boolean) {
        if (theTogler) {
          this.toggleClass = 'collapse navbar-collapse';

          // console.log(this.toggleClass);
        } else {
          this.toggleClass = 'navbar-collapse';

        }
      }

      changeUserRoleValue() {}
      setRoleId(event: any) {
        this.fval. user_role_id.enable();
        this.fval.user_role_id.setValue(this.userRoleInfo1.find(
        theUserRoleD => theUserRoleD.user_role_name === event.target.value
      ).user_role_id);


      }
      createLedger() {


      }




}
