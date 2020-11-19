import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { CustomValidator } from 'src/app/validators/custom-validator';
import { CountryRegions } from 'src/app/shared/models/country-regions';

@Component({
  selector: "app-register-smart-vendor",
  templateUrl: "./register-smart-vendor.component.html",
  styleUrls: ["./register-smart-vendor.component.scss"],
})
export class RegisterSmartVendorComponent implements OnInit {
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  userForm: FormGroup;
  serviceErrors: any = {};
  value: string;
  mySubscription: any;
  myDateValue: Date;
  countryRegions: CountryRegions[];
  agentUsed = false;
  countryId: number;
  agentsNumber: string;
  registedAgent: any;
  values: any;
  numberValue: number;

  // uex024n

  constructor(
    private authService: AuthServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private alertService: AlertService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myDateValue = new Date();
    this.userForm = this.createFormGroup();
    this.createCountryRegions();
  }

  createFormGroup() {
    return this.fb.group(
      {
        full_name: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),

        country_region: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),

        country_region_id: new FormControl(""),

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

        date_of_birth: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),

        // user_image: new FormControl('', Validators.compose([Validators.required])),

        agents_contact_number: new FormControl(
          { value: "", disabled: true },
          Validators.compose([
            Validators.required,
            CustomValidator.patternValidator(
              /^(([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
              { hasNumber: true }
            ),
          ])
        ),

        edad_number_of_tokens: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            CustomValidator.patternValidator(/\d/, { hasNumber: true }),
            Validators.maxLength(9),
          ])
        ),

        password: new FormControl(
          "",
          Validators.compose([
            // 1. Password Field is Required

            Validators.required,

            // 2. check whether the entered password has a number
            CustomValidator.patternValidator(
              /^(([1-9])([1-9])([1-9])([0-9]))$/,
              {
                hasNumber: true,
              }
            ),

            // 6. Has a minimum length of 8 characters
            Validators.minLength(4),
            Validators.maxLength(4),
          ])
        ),
        confirmPassword: new FormControl(
          "",
          Validators.compose([
            // 1. Password Field is Required

            Validators.required,

            // 2. check whether the entered password has a number
            CustomValidator.patternValidator(
              /^(([0-9])([0-9])([0-9])([0-9]))$/,
              {
                hasNumber: true,
              }
            ),
            // 6. Has a length of exactly 4 digits
            Validators.minLength(4),
            Validators.maxLength(4),
          ])
        ),
      },
      { validator: CustomValidator.passwordMatchValidator }
    );
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

  createCountryRegions() {
    this.authService.getCounryRegions().subscribe(
      (data) => {
        this.countryRegions = data;
        this.alertService.success({
          html: "<b> Country Regions Updated</b>" + "<br/>",
        });
      },

      (error: string) => {
        this.errored = true;
        this.serviceErrors = error;
        this.alertService.danger({
          html: "<b>" + this.serviceErrors + "</b>" + "<br/>",
        });
      }
    );
  }

  checkWhtherAgentIsRegistered(agentsNumber: string): any {
    return new Promise((resolve) => {
      this.authService.isAgentRegistered(agentsNumber).subscribe((status) => {
        resolve(status);
      });
    });
  }

  onCheckChange(event: any) {
    if (event.target.checked) {
      this.agentUsed = true;
      this.fval.agents_contact_number.enable();
    } else {
      this.agentUsed = false;
      this.fval.agents_contact_number.disable();
    }
  }

  revert() {
    this.userForm.reset();
  }

  get fval() {
    return this.userForm.controls;
  }

  returnHome() {
    this.spinner.hide();
    this.revert();

    setTimeout(() => {
      this.router.navigate(["authpage/loginpage"]);
    }, 2000);
  }

  setCountryRegionId(event: any) {
    this.countryId = this.countryRegions.find(
      (regionDetails) =>
        regionDetails.country_region_name === event.target.value
    ).country_region_id;
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();

    if (this.userForm.invalid === true) {
      return;
    } else {
      this.userForm.patchValue({
        country_region_id: this.countryId,
      });

      if (this.agentUsed) {
        this.checkWhtherAgentIsRegistered(
          this.fval.agents_contact_number.value
        ).then((results) => {
          if (results) {
            this.authService.registerSmartSaverAgent(this.userForm).subscribe(
              () => {
                this.posted = true;

                this.spinner.hide();

                this.alertService.success({
                  html:
                    "<b>User Registration was Successful!!</b>" +
                    "</br>" +
                    "Please proceed to purchase a box and then get access to the savers dashboard",
                });

                setTimeout(() => {
                  this.router.navigate(["authpage/loginpage"]);
                }, 3000);
              },

              (error: string) => {
                //       this.spinner.hide();
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
          } else {
            this.spinner.hide();
            this.alertService.danger({
              html:
                "<b>" +
                "The Agent's telephone number is not registered for SMART AGENCY" +
                "</b>" +
                "<br/>",
            });

            this.agentsNumber = this.fval.agents_contact_number.value;
            this.fval.agents_contact_number.setErrors({ notRegistered: true });
            // this.revert();
          }
        });

        //   // this.registered = true;
      } else {
        this.authService.registerSmartSaverNoAgent(this.userForm).subscribe(
          () => {
            this.posted = true;

            this.spinner.hide();

            this.alertService.success({
              html:
                "<b>User Registration was Successful!!</b>" +
                "</br>" +
                "Please proceed to purchase a box and then get access to the savers dashboard",
            });

            setTimeout(() => {
              this.router.navigate(["authpage/loginpage"]);
            }, 3000);
          },

          (error: string) => {
            //       this.spinner.hide();
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

        //   // this.registered = true;
      }
    }
  }
}

