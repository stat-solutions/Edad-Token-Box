import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { CustomValidator } from 'src/app/validators/custom-validator';
import { error } from 'util';

@Component({
  selector: "app-admin-register",
  templateUrl: "./admin-register.component.html",
  styleUrls: ["./admin-register.component.scss"],
})
export class AdminRegisterComponent implements OnInit {
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  userForm: FormGroup;
  myDateValue: Date;
  serviceErrors: any = {};
  adminNumber: string;
  value: string;
  values: any;
  numberValue: number;
fieldType: boolean;
  // uex024n

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.myDateValue = new Date();
    this.userForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      full_name: new FormControl("", Validators.compose([Validators.required])),
      main_contact_number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          CustomValidator.patternValidator(
            /^(([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { hasNumber: true }
          ),
        ])
      ),

      sex: new FormControl("", Validators.compose([Validators.required])),

      password: new FormControl(
        "",
        Validators.compose([
          // 1. Password Field is Required

          Validators.required,

          // 2. check whether the entered password has a number
          CustomValidator.patternValidator(/^(([1-9])([1-9])([1-9])([0-9]))$/, {
            hasNumber: true,
          }),
          // 3. check whether the entered password has upper case letter
          // CustomValidatorInitialCompanySetup.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // 4. check whether the entered password has a lower-case letter
          // CustomValidatorInitialCompanySetup.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // 5. check whether the entered password has a special character
          // CustomValidatorInitialCompanySetup.
          //   patternValidator(/[!@#$%^&*_+-=;':"|,.<>/?/<mailto:!@#$%^&*_+-=;':"|,.<>/?]/, { hasSpecialCharacters: true }),

          // 6. Has a minimum length of 8 characters
          Validators.minLength(4),
          Validators.maxLength(4),
        ])
      ),
    });
  }

  revert() {
    this.userForm.reset();
  }

  get fval() {
    return this.userForm.controls;
  }

  // toggle visibility of password field
  toggleFieldType(): any {
    this.fieldType = !this.fieldType;
  }

  returnHome() {
    this.spinner.hide();
    this.revert();

    // setTimeout(() => {
    //   this.router.navigate(['authpage/loginpage']);
    // }, 2000);
  }

  onKey(event: any) {
    // without type info
    this.values = event.target.value.replace(/[\D\s\._\-]+/g, "");

    this.numberValue = this.values ? parseInt(this.values, 10) : 0;

    // tslint:disable-next-line:no-unused-expression
    this.values =
      this.numberValue === 0 ? "" : this.numberValue.toLocaleString("en-US");

    this.fval.edad_number_of_tokens.setValue(this.values);
  }

  //  checkWhetherAdminIsRegistered(
  // agentsNumber: string): any {
  //   return new Promise(resolve => {
  //     this.authService.isAdminRegistered(agentsNumber).subscribe(status => {
  //       resolve(status);
  //     });
  //   });
  // }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();

    if (this.userForm.invalid === true) {
      return;
    } else {
      this.authService.registerAdminNow(this.userForm).subscribe(
        () => {
          this.posted = true;

          this.spinner.hide();

          this.alertService.success({
            html:
              "<b>Admin Registration was Successful!!</b>" +
              "</br>" +
              "Please contact the system admin for approval and then get access to the admin's dashboard",
          });

          setTimeout(() => {
            this.router.navigate(["authpage/loginpage"]);
          }, 3000);
        },

        (error: string) => {
          this.spinner.hide();
          this.errored = true;
          this.serviceErrors = error;

          this.alertService.danger({
            html: "<b>" + this.serviceErrors + "</b>" + "<br/>",
          });
          setTimeout(() => {
            // location.reload();
          }, 3000);
          console.log(error);

          this.spinner.hide();
        }
      );
    }
  }
}
