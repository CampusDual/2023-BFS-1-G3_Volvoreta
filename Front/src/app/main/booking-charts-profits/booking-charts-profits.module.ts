import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { BookingChartsProfitsRoutingModule } from './booking-charts-profits-routing.module';
import { BookingChartsProfitsHomeComponent } from './booking-charts-profits-home/booking-charts-profits-home.component';
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({
  declarations: [BookingChartsProfitsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SharedModule,
    BookingChartsProfitsRoutingModule,
    OChartModule
  ]
})
export class BookingChartsProfitsModule { }
