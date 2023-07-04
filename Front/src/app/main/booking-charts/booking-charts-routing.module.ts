import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingChartsHomeComponent } from './booking-charts-home/booking-charts-home.component';


const routes: Routes = [
  { path: '', component: BookingChartsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingChartsRoutingModule { }
