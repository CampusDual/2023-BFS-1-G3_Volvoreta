import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { BookingChartsRoutingModule } from './booking-charts-routing.module';
import { BookingChartsHomeComponent } from './booking-charts-home/booking-charts-home.component';
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({
  declarations: [BookingChartsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SharedModule,
    BookingChartsRoutingModule,
    OChartModule
  ]
})
export class BookingChartsModule { }
