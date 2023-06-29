import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalBookingDetailComponent } from './global-booking-detail/global-booking-detail.component';
import { GlobalBookingHomeComponent } from './global-booking-home/global-booking-home.component';
import { GlobalBookingChartComponent } from './global-booking-chart/global-booking-chart.component';


const routes: Routes = [
  { path: '', component: GlobalBookingHomeComponent },
  { path: "/chart", component: GlobalBookingChartComponent},
  { path: ":id", component: GlobalBookingDetailComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalBookingsRoutingModule { }
