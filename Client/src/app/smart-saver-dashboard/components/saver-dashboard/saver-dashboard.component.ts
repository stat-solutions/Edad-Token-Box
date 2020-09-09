import { TxnsHistory } from './../../../shared/models/txns-history';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';
import { SmartSaverServiceService } from 'src/app/shared/services/smart-saver-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';
import * as jwt_decode from 'jwt-decode';
import { AccountBalance } from 'src/app/shared/models/account-balance';
import { InterestRuninngBalance } from 'src/app/shared/models/interest-runinng-balance';
// import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-saver-dashboard',
  templateUrl: './saver-dashboard.component.html',
  styleUrls: ['./saver-dashboard.component.scss']
})
export class SaverDashboardComponent implements OnInit {

  userForm: FormGroup;
  sideBarChanged = true;
  boxBalance: AccountBalance[];
  user = '/../../../assets/avatar3.jpeg';
  boxinError: any;
  // savingsBalance : AccountBalance[];
  interestEarnings: InterestRuninngBalance[];
  userName: string;
  notRead = true;
  numberOfItems = 3;
  TxnsHistory: TxnsHistory[];
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private smartSaverServices: SmartSaverServiceService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService

  ) { }

  ngOnInit() {
    this.getTxnHistoryBox();
    this.initializeBoxBalance();
    this.initializeInterestBalance();
    this.toggleSideBar();
  }

  toggleSideBar() {
    this.sideBarChanged = !this.sideBarChanged;
    // this.sharedService.emitChange(this.sideBarChanged);
  }


  createFormGroup() {
    return new FormGroup({

      search_value: new FormControl('', Validators.compose([Validators.required,
      // CustomValidatorInitialCompanySetup.patternValidator(/\d/, { hasNumber: true }),
      Validators.maxLength(12), Validators.maxLength(12), Validators.minLength(12)
      ]))
    });
  }

  revert() {
    this.userForm.reset();
  }

  get fval() { return this.userForm.controls; }


  readAlread() {
    this.notRead = true;
  }


  private initializeBoxBalance() {
    this.smartSaverServices.mainBoxBalance(jwt_decode(this.authService.getJwtToken()).user_id).subscribe(
    balance => this.boxBalance = balance,
    error => this.boxinError = error);
  }

  private initializeInterestBalance() {
    this.smartSaverServices.mainInterestBalance(jwt_decode(this.authService.getJwtToken()).user_id).subscribe(
      interest => this.interestEarnings = interest,
      error => this.boxinError = error);
  }


  private getTxnHistoryBox() {

    this.smartSaverServices.txnHistoryBox(jwt_decode(this.authService.getJwtToken()).user_id).subscribe(
      history =>


      this.TxnsHistory = history,


      error => this.boxinError = error
      );
  }





}
