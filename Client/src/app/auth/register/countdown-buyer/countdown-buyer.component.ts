import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { AlertService } from "ngx-alerts";
import { CustomValidator } from "src/app/validators/custom-validator";
import { CountryRegions } from "src/app/shared/models/country-regions";

@Component({
  selector: "app-countdown-buyer",
  templateUrl: "./countdown-buyer.component.html",
  styleUrls: ["./countdown-buyer.component.scss"],
})
export class CountdownBuyerComponent implements OnInit {
  registered = false;
  submitted = false;
  errored = false;
  posted = false;
  userForm: FormGroup;
  serviceErrors: any = {};
  value: string;
  mySubscription: any;
  myDateValue: Date;
  fieldType: boolean;
  countryRegions: CountryRegions[];
  agentUsed = false;
  countryId: number;
  agentsNumber: string;
  registedAgent: any;

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

        national_id: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(14),
            Validators.maxLength(14),
          ])
        ),

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

        // date_of_birth: new FormControl(
        //   '',
        //   Validators.compose([Validators.required])
        // ),

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

        // edad_number_of_tokens: new FormControl(
        //   '',
        //   Validators.compose([
        //     Validators.required,
        //     CustomValidator.patternValidator(/\d/, { hasNumber: true }),
        //     Validators.maxLength(9)
        //   ])
        // ),

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

  createCountryRegions() {
    this.authService.getCounryRegions().subscribe(
      (data) => {
        console.log(data[0]);
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
    console.log(event.target.checked);
    if (event.target.checked) {
      this.agentUsed = true;
      this.fval.agents_contact_number.enable();
    } else {
      this.agentUsed = false;
      this.fval.agents_contact_number.disable();
    }
  }

  // toggle visibility of password field
  toggleFieldType(): any {
    this.fieldType = !this.fieldType;
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
                    "<b>Smart Saver registration was Successful</b>" +
                    "</br>" +
                    "Please proceed to purchase a box and then get access to the Countdown buyer's dashboard",
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
                "<b>Registration was Successful</b>" +
                "</br>" +
                "Please proceed to login into your dashboard to transact",
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
