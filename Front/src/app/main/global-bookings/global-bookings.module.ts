import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { GlobalBookingsRoutingModule } from './global-bookings-routing.module';
import { GlobalBookingHomeComponent } from './global-booking-home/global-booking-home.component';
import { GlobalBookingDetailComponent } from './global-booking-detail/global-booking-detail.component';
import { GlobalBookingChartComponent } from './global-booking-chart/global-booking-chart.component';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [GlobalBookingHomeComponent, GlobalBookingDetailComponent, GlobalBookingChartComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    GlobalBookingsRoutingModule,
    OChartModule
  ]
})
export class GlobalBookingsModule { }
