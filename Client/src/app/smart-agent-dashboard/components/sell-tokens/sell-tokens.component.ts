import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/validators/custom-validator';
import { AgentDashboardService } from 'src/app/shared/services/agent-dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { UserRole } from 'src/app/shared/models/user-role';
import * as jwt_decode from 'jwt-decode';
import { SmartSaverServiceService } from 'src/app/shared/services/smart-saver-service.service';
import { AccountBalance } from 'src/app/shared/models/account-balance';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-sell-tokens',
  templateUrl: './sell-tokens.component.html',
  styleUrls: ['./sell-tokens.component.scss']
})
export class SellTokensComponent implements OnInit {

@ViewChild('template', {static: true}) model: TemplateRef<any>;

      modalRef: BsModalRef;
     amountBalance: number;
      userForm1: FormGroup;
      userForm: FormGroup;
      posted = false;
      actionButton: string;
      shiftDetails: any;
      station: any;
      errored: boolean;
      serviceErrors: string;
      boxinError: any;
      checkedOk: boolean;
      theCompany: string;
      closingBal: string;
      theOtherNumber: any;
      loanDetails: any;
      loanLimit: number;
      amountDue: number;
      txnId: number;
      numberValue: number;
      values: any;
      registered = false;
      submitted = false;
      loginStatus: string;
      value: string;
      stationBalanceExits: boolean;
      mySubscription: any;
      userRoleInf: any = {};
      userRoleInfo1: UserRole[];
      userRolesPresent: boolean;
      roleId: number;
      boxBalance: AccountBalance[];
      constructor(
        private smartAgentServices: AgentDashboardService,
        private spinner: NgxSpinnerService,
        private smartSaverServices: SmartSaverServiceService,
        private alertService: AlertService,
        private authService: AuthServiceService,
        private modalService: BsModalService,
        private router: Router
      ) {}


      ngOnInit() {

        this.userForm = this.createFormGroup();
        this.checkedOk = false;
        this.userRoleData1();
        this.userForm1 =  this.createSecondFormGroup();
        this.getTheBalance();
      }


      openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }

      getTheBalance() {
        this.smartSaverServices
      .mainBoxBalance(jwt_decode(this.authService.getJwtToken()).user_id)
      .subscribe(
        (balance) => (this.boxBalance = balance),
        (error) => (this.boxinError = error)
      );
      }


      createFormGroup() {
        return new FormGroup({
          user_id: new FormControl(''),
          user_contact_number: new FormControl(''),
          final_contact_number: new FormControl(''),
          amount_due: new FormControl(''),
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

          tokens_to_sell: new FormControl(
            { value: '', disabled: true },
            Validators.compose([
              Validators.required,
              CustomValidator.patternValidator(/\d/, { hasNumber: true }),
              Validators.maxLength(6),
              Validators.minLength(1)
            ])
          ), user_role_name: new FormControl(
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
        });
      }


      changeForm() {
        this.amountDue = this.fval.tokens_to_sell.value * 1000;
      }

      createSecondFormGroup() {
        return new FormGroup({
          theContact: new FormControl(''),
          theRole: new FormControl('')
        });
      }

      userRoleData1() {
        this.authService.getUserRoles().subscribe(
          data => {

            this.userRoleInfo1 = data;
            // console.log(this.userRoleInfo1);
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




      changeUserRoleValue() {
// console.log(`the roles is ${this.fval.main_contact_number.value}`)
this.authService.testUserMoreUserRoles(this.fval.main_contact_number.value).subscribe(

         roledata => {

           if (roledata[0].roles > 0) {
            //  console.log(this.userRoleInfo1);
             this.userRolesPresent = true;
             this.fval. user_role_name.enable();
             // tslint:disable-next-line: max-line-length
             this.userRoleInfo1 = this.userRoleInfo1.filter(theUserRoleD => theUserRoleD.users_contact === this.fval.main_contact_number.value);
            //  console.log(this.userRoleInfo1);
           } else {

             console.log(roledata[0].roles);

          //    this.userRolesPresent = false;
             this.alertService.danger({
            html: '<b>Number is not registered!!!</b>' + '<br/>'
          });
             this.fval. user_role_name.disable();
           }

         }, (error: string) => {



         }

        );
       }


       checkNumberContactExistance(userId: FormGroup) {
        this.spinner.show();
        this.smartAgentServices
          .checkWhetherTheNumberExists(userId)
          .subscribe(
            data => {
              this.loanDetails = data[0];

              // if (this.loanDetails.length > 0 ) {
              // console.log(this.loanDetails.length);
              this.spinner.hide();
              this.checkedOk = true;
              this.fval.final_contact_number.setValue(this.fval.main_contact_number.value);
              this.userForm.controls.main_contact_number.disable();
              this.userForm.controls.tokens_to_sell.enable();

            // } else {

            //   this.alertService.danger({
            //     html: '<b>Number is not registered!!!</b>' + '<br/>'
            //   });
            // }
            },

            (error: string) => {
              this.spinner.hide();
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


         this.userForm1.patchValue({
          theContact: this.fval.main_contact_number.value,
          theRole:  this.fval.user_role_id.value
        });

         this.checkNumberContactExistance(this.userForm1);

       }

      revert() {
        this.userForm.reset();
      }

      refresh() {
        location.reload();
      }
      revertPetrol() {
        this.userForm.controls.petrol_station.reset();
      }

      get fval() {
        return this.userForm.controls;
      }
      onKey(event: any) {
        // without type info
        this.values = event.target.value.replace(/[\D\s\._\-]+/g, '');

        this.numberValue = this.values ? parseInt(this.values, 10) : 0;

        // tslint:disable-next-line:no-unused-expression
        this.values =
          this.numberValue === 0 ? '' : this.numberValue.toLocaleString('en-US');

        this.userForm.controls.tokens_to_sell.setValue(this.values);
      }




      sellTheTokens() {

console.log(jwt_decode(this.authService.getJwtToken()).user_contact);
// console.log(this.boxBalance[0].BOX_BALANCE);

        // tslint:disable-next-line:triple-equals
if ( this.fval.user_role_id.value === 1006) {
          this.alertService.danger({
            html: '<b>You cannot sell tokens to admin</b>'
          });
          return;
        } else {

          if (this.fval.tokens_to_sell.value > this.boxBalance[0].BOX_BALANCE) {
            this.alertService.warning({
              html: '<b>Tokens being sold are more than available tokens!!</b>' + '<br/>'
            });
            return;
          } else {

            this.userForm.patchValue({
              user_id: jwt_decode(this.authService.getJwtToken()).user_id,
              user_contact_number: jwt_decode(this.authService.getJwtToken()).user_contact
            });
            // console.log(this.userForm.value);
            this.posted = true;
            this.spinner.show();
            this.smartAgentServices.sellTheTokens(this.userForm).subscribe(
              () => {
                // this.amountDue = result[0].amount_due;
                // this.txnId = result[0].txn_id;
                this.spinner.hide();
                this.openModal(this.model);

                setTimeout(() => {
                  this.router.navigate(['dashboardAgent/theAgentDashboard']);
                }, 2000);
              },

              (error: string) => {
                this.spinner.hide();
                this.errored = true;
                this.serviceErrors = error;
                this.alertService.danger({
                  html: '<b>' + this.serviceErrors + '</b>' + '<br/>'
                });
              }
            );
          }
        }}}








