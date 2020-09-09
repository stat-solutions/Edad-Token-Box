import { TablesComponent } from './../../../pages/components/tables/tables.component';
import { AgentDashboardService } from './../../../shared/services/agent-dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';
import * as jwt_decode from 'jwt-decode';
import { CustomValidator } from 'src/app/validators/custom-validator';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add-token-stock',
  templateUrl: './add-token-stock.component.html',
  styleUrls: ['./add-token-stock.component.scss']
})
export class AddTokenStockComponent implements OnInit {


    modalRef: BsModalRef;
    userForm: FormGroup;
    posted = false;
    actionButton: string;
    shiftDetails: any;
    errored: boolean;
    serviceErrors: string;
    status: boolean;
    checkedOk: boolean;
    station: string;
    theCompany: string;
    closingBal: string;
    numberPlates: any;
    loanDetails: any;
    secretPin: number;
    loanLimit: number;
    amountDue = 0;
    txnId: number;
    numberValue: number;
    values: any;
    registered = false;
    submitted = false;
    myDateValue: Date;
    adminNumber: string;
    value: string;

    constructor(
      private authService: AuthServiceService,
      private router: Router,
      private smartAgentServices: AgentDashboardService,
      private spinner: NgxSpinnerService,
      private alertService: AlertService
    ) {}

    ngOnInit() {
      this.userForm = this.createFormGroup();
      this.checkedOk = false;
    }

    createFormGroup() {
      return new FormGroup({
        users_savers_id: new FormControl(''),
        users_savers_contact: new FormControl(''),
        users_role_savers: new FormControl(''),
        amount_due: new FormControl(''),
        number_of_tokens: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            CustomValidator.patternValidator(/\d/, { hasNumber: true }),
            Validators.minLength(1),
            Validators.maxLength(8)
          ])
        )
      });
    }

    get fval() {
      return this.userForm.controls;
    }

    revert() {
      this.userForm.reset();
    }



    // openModal() {
    //   this.modalRef = this.modalServiceb.show(BuyTokenDialogComponent, {
    //     initialState: {
    //       title: 'BUY TOKENS',
    //       data: {
    //         number_plate: this.userForm.controls.number_plate.value,
    //         amount_to_borrow: this.userForm.controls.amount_to_borrow.value,
    //         amount_due: this.amountDue,
    //         txn_id: this.txnId
    //       }
    //     }
    //   });
    // }

    onKey(event: any) {
      // without type info
      this.values = event.target.value.replace(/[\D\s\._\-]+/g, '');

      this.numberValue = this.values ? parseInt(this.values, 10) : 0;

      // tslint:disable-next-line:no-unused-expression
      this.values =
        this.numberValue === 0 ? '' : this.numberValue.toLocaleString('en-US');

      this.userForm.controls.number_of_tokens.setValue(this.values);
    }
    changeForm() {
      this.amountDue = this.fval.number_of_tokens.value * 1000;
    }

    buyTheTokens() {
      this.submitted = true;
      this.spinner.show();

      if (this.userForm.invalid === true) {
        return;
      } else {
        if (this.fval.number_of_tokens.value >= 50) {
        this.userForm.patchValue({
          users_savers_id: jwt_decode(this.authService.getJwtToken()).user_id,
          users_savers_contact: jwt_decode(this.authService.getJwtToken())
            .user_contact,
          users_role_savers: jwt_decode(this.authService.getJwtToken())
            .user_role,
            amount_due: this.amountDue
        });

        this.smartAgentServices.buySmartAgentTokens(this.userForm).subscribe(
          () => {
            this.posted = true;

            this.spinner.hide();

            this.alertService.success({
              html:
                '<b>Stock bulk Token purchase request was sucessfully submitted!!</b>' +
                '</br>' +
                'Please send UGX' +
                this.fval.amount_due.value +
                ' to either 0780267542 or 0759516531.' +
                'Check dashboard for receipt and order excution.'
            });

            setTimeout(() => {
              this.spinner.hide();


              this.router.navigate(['dashboardAgent/theAgentDashboard']);

            }, 5000);
          },

          (error: string) => {
            this.spinner.hide();
            this.errored = true;
            this.serviceErrors = error;

            this.alertService.danger({
              html: '<b>' + this.serviceErrors + '</b>' + '<br/>'
            });

            this.spinner.hide();
          }
        );
      } else {
        this.spinner.hide();
        this.alertService.danger({
          html: '<b> A minimum of 25 tokens is required to complete this transaction!!!</b>' + '<br/>'
        });

      }
      }
    }


    }




