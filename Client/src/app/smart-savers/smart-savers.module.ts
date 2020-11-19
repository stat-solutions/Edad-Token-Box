import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { SmartSaversRoutingModule } from './smart-savers-routing.module';
import { SmartSaversComponent } from './smart-savers.component';
import { SmartSaverDashboardComponent } from './smart-saver-dashboard/smart-saver-dashboard.component';
import { AlertModule } from "ngx-alerts";
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [SmartSaversComponent, SmartSaverDashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SmartSaversRoutingModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: "right" }),
    NgxSpinnerModule,
    BsDatepickerModule,
  ],
})
export class SmartSaversModule {}
