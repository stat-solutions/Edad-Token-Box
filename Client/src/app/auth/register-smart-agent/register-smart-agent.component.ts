import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryRegions } from 'src/app/shared/models/country-regions';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { CustomValidator } from 'src/app/validators/custom-validator';

@Component({
  selector: 'app-register-smart-agent',
  templateUrl: './register-smart-agent.component.html',
  styleUrls: ['./register-smart-agent.component.scss']
})
export class RegisterSmartAgentComponent implements OnInit {
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
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.myDateValue = new Date();
    this.userForm = this.createFormGroup();
    this.createCountryRegions();
  }

  createFormGroup() {
    return new FormGroup({
      full_name: new FormControl('', Validators.compose([Validators.required])),

      country_region: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      national_id: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14)
        ])
      ),
      country_region_id: new FormControl(''),

      main_contact_number: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          CustomValidator.patternValidator(
            /^(([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
            { hasNumber: true }
          )
        ])
      ),

      sex: new FormControl('', Validators.compose([Validators.required])),

      // date_of_birth: new FormControl(
      //   '',
      //   Validators.compose([Validators.required])
      // ),

      // user_image: new FormControl('', Validators.compose([Validators.required])),

      // agents_contact_number: new FormControl(
      //   { value: '', disabled: true },
      //   Validators.compose([
      //     Validators.required,
      //     CustomValidator.patternValidator(
      //       /^(([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
      //       { hasNumber: true }
      //     )
      //   ])
      // ),

      // edad_number_of_tokens: new FormControl(
      //   '',
      //   Validators.compose([
      //     // Validators.required,
      //     CustomValidator.patternValidator(/\d/, { hasNumber: true }),
      //     Validators.maxLength(9)
      //   ])
      // ),

      password: new FormControl(
        '',
        Validators.compose([
          // 1. Password Field is Required

          Validators.required,

          // 2. check whether the entered password has a number
          CustomValidator.patternValidator(/^(([1-9])([1-9])([1-9])([0-9]))$/, {
            hasNumber: true
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
          Validators.maxLength(4)
        ])
      )
    });
  }

  createCountryRegions() {
    this.authService.getCounryRegions().subscribe(
      data => {
        this.countryRegions = data;
        this.alertService.success({
          html: '<b> Country Regions Updated</b>' + '<br/>'
        });
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

  checkWhtherAgentIsRegistered(agentsNumber: string): any {
    return new Promise(resolve => {
      this.authService.isAgentRegistered(agentsNumber).subscribe(status => {
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

    // setTimeout(() => {
    //   this.router.navigate(['authpage/loginpage']);
    // }, 2000);
  }

  setCountryRegionId(event: any) {
    this.countryId = this.countryRegions.find(
      regionDetails => regionDetails.country_region_name === event.target.value
    ).country_region_id;
  }

  onKey(event: any) {
    // without type info
    this.values = event.target.value.replace(/[\D\s\._\-]+/g, '');

    this.numberValue = this.values ? parseInt(this.values, 10) : 0;

    // tslint:disable-next-line:no-unused-expression
    this.values =
      this.numberValue === 0 ? '' : this.numberValue.toLocaleString('en-US');

    this.fval.edad_number_of_tokens.setValue(this.values);
  }
  onSubmit() {
    // this.userForm.patchValue({
    //   edad_number_of_tokens: parseInt( this.fval.edad_number_of_tokens.value.replace(/[\D\s\._\-]+/g, ''), 10)
    // });

    this.submitted = true;
    this.spinner.show();

    if (this.userForm.invalid === true) {
      return;
    } else {
      this.userForm.patchValue({
        country_region_id: this.countryId
      });

      // if (this.agentUsed) {

      this.checkWhtherAgentIsRegistered(
        this.fval.main_contact_number.value
      ).then(results => {
        if (!results) {
          this.authService.registerSmartAgent(this.userForm).subscribe(
            () => {
              this.posted = true;

              this.spinner.hide();

              this.alertService.success({
                html:
                  '<b>Smart Agent Registration was Successful!!</b>' +
                  '</br>' +
                  'Please proceed to purchase a box and then get access to the agent\'s dashboard'
              });

              setTimeout(() => {
                this.router.navigate(['authpage/loginpage']);
              }, 3000);
            },

            (error: string) => {
              //       this.spinner.hide();
              this.errored = true;
              this.serviceErrors = error;

              this.alertService.danger({
                html: '<b>' + this.serviceErrors + '</b>' + '<br/>'
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
              '<b>' +
              'The Agent\'s telephone number is already registered' +
              '</b>' +
              '<br/>'
          });

          this.agentsNumber = this.fval.main_contact_number.value;
          this.fval.main_contact_number.setErrors({ alreadyRegistered: true });
          // this.revert();
        }
      });

      //   // this.registered = true;
      // }
    }
  }
}
