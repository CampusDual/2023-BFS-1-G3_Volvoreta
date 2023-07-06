import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingChartsSellsRoutingModule } from './booking-charts-sells-routing.module';
import { BookingChartsSellsHomeComponent } from './booking-charts-sells-home/booking-charts-sells-home.component';
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({
  declarations: [BookingChartsSellsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SharedModule,
    BookingChartsSellsRoutingModule,
    OChartModule
  ]
})
export class BookingChartsSellsModule { }
