import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingChartsProfitsHomeComponent } from './booking-charts-profits-home/booking-charts-profits-home.component';


const routes: Routes = [
  { path: '', component: BookingChartsProfitsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingChartsProfitsRoutingModule { }
