import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminApprovalDetails } from 'src/app/shared/models/admin-approval-details';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { AdminDashboardService } from 'src/app/shared/services/admin-dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: "app-approve-token-purchases",
  templateUrl: "./approve-token-purchases.component.html",
  styleUrls: ["./approve-token-purchases.component.scss"],
})
export class ApproveTokenPurchasesComponent implements OnInit {
  userForm: FormGroup;
  actionButton: string;
  // clientDetails: AdminApprovalDetails[];
  errored: boolean;
  serviceErrors: string;
  status: boolean;
  balance = 1000000;
  station: string;
  theCompany: string;
  closingBal: string;
  clientDetails = [
    {
      id: 23444,
      lId: "ED30620",
      trn_date: "11/2/2020",
      trn_time: "12:06 P.M",
      name: "Obonyo Peterson",
      phone: "0776367375",
      tokens_purchased: 150,
      expected_amount: 150000,
    },
    {
      id: 21644,
      lId: "ED30330",
      trn_date: "11/2/2020",
      trn_time: "12:13 P.M",
      name: "Ssenabulya Gerald",
      phone: "0773392385",
      tokens_purchased: 200,
      expected_amount: 200000,
    },
  ];
  constructor(
    private authService: AuthServiceService,
    private adminUserService: AdminDashboardService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    // this.station = jwt_decode(this.authService.getJwtToken()).user_station_name;
    // this.theCompany = jwt_decode(
    //   this.authService.getJwtToken()
    // ).user_station_company;
    this.userForm = this.createFormGroup();
    // this.tokensApprovalDetails();
    // this.checkloans();

    this.tokensApprovalPurchaseDetails();
    this.populateAllBalanceTokens();
  }

  createFormGroup() {
    return new FormGroup({
      selection_options: new FormControl(""),
      user_station: new FormControl(""),
    });
  }

  get fval() {
    return this.userForm.controls;
  }

  RejectTokenApproval(customerId: string) {
    this.adminUserService.rejectTokenAdminS(customerId).subscribe(
      (data) => {
        this.status = data;

        this.alertService.success({
          html:
            "<b>" +
            this.clientDetails.find((thetoken) => thetoken.lId === customerId)
              .name +
            "'s token requested was successfully rejected" +
            "</b>" +
            "<br/>",
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

    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  approveTokens(customerId: string) {
    this.adminUserService.approveTokensAdminPurchase(customerId).subscribe(
      (data) => {
        this.status = data;

        this.alertService.success({
          html:
            "<b>" +
            this.clientDetails.find((thetoken) => thetoken.lId === customerId)
              .name +
            "'s token requested was successfully approved" +
            "</b>" +
            "<br/>",
        });

        setTimeout(() => {
          location.reload();
        }, 5000);
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

  tokensApprovalPurchaseDetails() {
    this.adminUserService.getAllDetailsOfTokenPurchaseApprovals().subscribe(
      (data) => {
        this.clientDetails = data;
        // this.alertService.success({ html: '<b> User Roles Updated</b>' + '<br/>' });
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

  populateAllBalanceTokens() {
    this.adminUserService.getAllBalanceRunningTokens().subscribe(
      (databc) => {
        this.balance = databc[0].balance;
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
}
