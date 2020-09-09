import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRole } from 'src/app/shared/models/user-role';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountLevel2 } from 'src/app/shared/models/account-level-2';
import { AccountLevel3 } from 'src/app/shared/models/account-level-3';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {


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
    counter = 0;
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

      accountLevel2X: AccountLevel2[] ;
      accountLevel3X: AccountLevel3[];

      accountLevel2: AccountLevel2[] = [{
        account_level_1: 'DEBIT',
        account_level_2: 'ASSETS'
      },
      {
      account_level_1: 'DEBIT',
      account_level_2: 'EXPENSE'
    },
    {
      account_level_1: 'CREDIT',
      account_level_2: 'LIABILITIES'
    },
    {
      account_level_1: 'CREDIT',
      account_level_2: 'REVENUE'
    },
    {
      account_level_1: 'CREDIT',
      account_level_2: 'EQUITY'
    }
  ];

  accountLevel3: AccountLevel3[] = [{
    account_level_2X: 'ASSETS',
    account_level_3X: 'CURRENT ASSETS'
  },
  {
    account_level_2X: 'ASSETS',
    account_level_3X: 'NON CURRENT ASSETS'
},
{
  account_level_2X: 'EXPENSE',
  account_level_3X: 'EXPENSES'
},
{
  account_level_2X: 'REVENUE',
  account_level_3X: 'REVENUES'
},
{
  account_level_2X: 'LIABILITIES',
  account_level_3X: 'CURRENT LIABILITIES'
},
{
  account_level_2X: 'LIABILITIES',
  account_level_3X: 'NON CURRENT LIABILITIES'
},
{
  account_level_2X: 'EQUITY',
  account_level_3X: 'CAPITAL'
}
];
      constructor(
        private authService: AuthServiceService,
        private router: Router,
        private alertService: AlertService,
        private spinner: NgxSpinnerService,
      ) {}

      ngOnInit() {
        this.userForm = this.createFormGroup();
        this.toggleArial();


      }


      createFormGroup() {

        return new FormGroup({

          account_level_1: new FormControl(
            '',
            Validators.compose([
              Validators.required,
              // CustomValidator.patternValidator(/\d/, { hasNumber: true }),
              // Validators.maxLength(10),
              // Validators.minLength(10)
            ])
          ),

          account_level_1X: new FormControl(''),

          account_level_2: new FormControl(
            { value: '', disabled: true },
            Validators.compose([
              Validators.required

            ]) ),

            account_level_2X: new FormControl(''),

          account_level_3: new FormControl(
            { value: '', disabled: true },
            Validators.compose([
              Validators.required

            ])
          ),

          account_level_3X: new FormControl(''),

          account_level_4: new FormControl(
            '',
            Validators.compose([
              Validators.required,
              // CustomValidator.patternValidator(/\d/, { hasNumber: true }),
              // Validators.maxLength(10),
              // Validators.minLength(10)
            ])
          ),
          account_level_5: new FormControl(
            '',
            Validators.compose([
              Validators.required,
              // CustomValidator.patternValidator(/\d/, { hasNumber: true }),
              Validators.maxLength(10),
              Validators.minLength(10)
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

      selectAccountLevel1Item(event: any) {

        this.fval. account_level_2.enable();

        this.accountLevel2X = this.accountLevel2;
      // accountLevel3X: AccountLevel3[];
        this.accountLevel2 = this.accountLevel2.filter(theAccountLevel2 => theAccountLevel2.account_level_1 === event.target.value);
        this.fval. account_level_1X.setValue(event.target.value);
        this.fval. account_level_1.disable();
      }




      selectAccountLeve21Item(event: any) {

        this.fval. account_level_3.enable();

        this.accountLevel3 = this.accountLevel3.filter(theAccountLevel3 => theAccountLevel3.account_level_2X === event.target.value);

      }

      onleavingAcL2() {this.accountLevel2 = this.accountLevel2X; }
      resetAccountLevel2Items() {this.accountLevel2 = this.accountLevel2 ; }

      createLedger() {


      }



}
