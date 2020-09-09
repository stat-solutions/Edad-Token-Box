import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserRole } from 'src/app/shared/models/user-role';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

    // initialSetUpData: SetupData[];

    constructor(
      private authService: AuthServiceService,
      private router: Router,
      private alertService: AlertService,
      private spinner: NgxSpinnerService,
    ) {}

    ngOnInit() {
      this.userForm = this.createFormGroup();
      this.userRoleData1();
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

    changeUserRoleValue(event: any) {

     this.authService.testUserMoreUserRoles(event.target.value).subscribe(

      roledata => {

        if (roledata[0].roles > 1) {
          // console.log(roledata[0].roles);
          this.userRolesPresent = true;
          this.fval. user_role_name.enable();
          this.userRoleInfo1 = this.userRoleInfo1.filter(theUserRoleD => theUserRoleD.users_contact === event.target.value);
          console.log(this.userRoleInfo1);
        } else {

          // console.log(roledata[0].roles);

          this.userRolesPresent = false;

          this.fval. user_role_name.disable();
        }

      }, (error: string) => {



      }

     );

    }

    userRoleData1() {
      this.authService.getUserRoles().subscribe(
        data => {

          this.userRoleInfo1 = data;
          console.log(this.userRoleInfo1);
          // this.alertService.success({
            // html: '<b> User Roles Updated</b>' + '<br/>'
          // });
        },

        (error: string) => {
          this.errored = true;
          this.serviceErrors = error;
          this.alertService.danger({
            html: '<b>' + this.serviceErrors + '</b>' + '<br/>'
          });
        }
      );
    }

    setRoleId(event: any) {
      this.fval. user_role_id.enable();
      this.fval.user_role_id.setValue(this.userRoleInfo1.find(
      theUserRoleD => theUserRoleD.user_role_name === event.target.value
    ).user_role_id);
    }


    login() {

      this.submitted = true;

      this.spinner.show();

      if (this.userForm.invalid === true) {
        return;
      } else {

        this.authService
          .loginNormalUser(this.userForm)

          .subscribe(
            (success: boolean) => {


              // if (success) {
              //   this.posted = true;

              //   if (
              //     jwt_decode(this.authService.getJwtToken()).approval_status ===
              //     1
              //   ) {
              //     this.alertService.danger({
              //       html:
              //         '<strong>This BOX account Requires Approval first, please contact system admin!!</strong>'
              //     });
              //     this.spinner.hide();
              //     return;
              //   } else if (
              //     jwt_decode(this.authService.getJwtToken()).approval_status ===
              //     2
                // ) {


                  if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1000
                  ) {
                    this.alertService.success({
                      html: '<strong>Signed In Successfully into Smart Saver\'s token box!!</strong>'
                    });


                    this.spinner.hide();
                    setTimeout(() => {
                      this.spinner.hide();


                      this.router.navigate(['smartsaver/saverdashboard']);

                    }, 1000);


                  } else if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1001
                  ) {
                    this.alertService.success({
                      html: '<strong>Signed In Successfully into Smart Agent\'s token box!!</strong>'
                    });
                    this.spinner.hide();
                    setTimeout(() => {

                      this.router.navigate(['smartagent/dashboardAgent/theAgentDashboard']);
                    }, 1000);
                  } else if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1002
                  ) {
                    this.alertService.success({
                      html: '<strong>Signed In Successfully into Smart Vendor\'s token box!!</strong>'
                    });
                    this.spinner.hide();

                    setTimeout(() => {
                      this.router.navigate([
                        'superuserdashboard/thesuperuserdashboard'
                      ]);
                    }, 1000);
                  }else if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1003
                  ) {
                    this.alertService.success({
                      html: '<strong>Signed In Successfully into Group User\'s token box!!</strong>'
                    });
                    this.spinner.hide();

                    setTimeout(() => {
                      this.router.navigate([
                        'smartgroup/dashboardgroup'
                      ]);
                    }, 1000);
                  }else if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1004
                  ) {
                    this.alertService.success({
                      html: '<strong>Signed In Successfully into Box for God token box!!</strong>'
                    });
                    this.spinner.hide();

                    setTimeout(() => {
                      this.router.navigate([
                        'smartgroup/dashboardgroup'
                      ]);
                    }, 1000);
                  } else if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1005
                  ) {
                    this.alertService.success({
                      html: '<strong>Signed In Successfully into School Fees token box!!</strong>'
                    });
                    this.spinner.hide();

                    setTimeout(() => {
                      this.router.navigate([
                        'smartgroup/dashboardgroup'
                      ]);
                    }, 1000);
                  } else if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1006
                  ) {


                if (
                  jwt_decode(this.authService.getJwtToken()).approval_status ===
                  1
                ) {
                  this.alertService.danger({
                    html:
                      '<strong>This ADMIN account Requires Approval first, please contact system admin!!</strong>'
                  });
                  this.spinner.hide();
                  return;
                } else if (
                  jwt_decode(this.authService.getJwtToken()).approval_status ===
                  2
                ) {

                    this.alertService.success({
                      html: '<strong>Signed In Successfully into Main Admin\'s  box!!</strong>'
                    });
                    this.spinner.hide();

                    setTimeout(() => {
                      this.router.navigate([
                        'admindashboard/dashboardadmin'
                      ]);
                    }, 1000);
                  }
                  }  else if (
                    jwt_decode(this.authService.getJwtToken()).user_role === 1007
                  ) {
                    this.alertService.success({
                      html: '<strong>Signed In Successfully into Super Users\'s  box!!</strong>'
                    });
                    this.spinner.hide();

                    setTimeout(() => {
                      this.router.navigate([
                        'superuser/thesuperdashboard'
                      ]);
                    }, 1000);
                  } else {

                    // this.alertService.danger({
                    //   html: '<strong>User not registered for this role!!</strong>'
                    // });

                    this.spinner.hide();

                  }
              //   } else if (
              //     jwt_decode(this.authService.getJwtToken()).approval_status ===
              //     3
              //   ) {
              //     this.alertService.danger({
              //       html:
              //         '<strong>This account has been deactivated!!, please contact system admin!!</strong>'
              //     });
              //     this.spinner.hide();
              //     return;
              //   }
              // } else {
              //   this.spinner.hide();
              //   this.errored = true;
              // }
            },

            (error: string) => {
              this.spinner.hide();
              this.errored = true;
              this.loginStatus = error;
              // this.alertService.danger(this.loginStatus);
              // this.alertService.danger({
              //   html: '<b>' + this.loginStatus + '</b>' + '<br/>'
              // });
              // this.alertService.warning({html: '<b>Signed In Successfully</b>'});
              if (
                this.loginStatus === 'Authorisation Failed!! User Not Registered'
              ) {
                setTimeout(() => {
                  this.router.navigate(['userDashboard/registeruser']);
                }, 1000);
              }
              this.spinner.hide();
            }
          );
      }}}

