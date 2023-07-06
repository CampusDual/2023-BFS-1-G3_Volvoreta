import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingChartsSellsHomeComponent } from '../booking-charts-sells/booking-charts-sells-home/booking-charts-sells-home.component';


const routes: Routes = [
  {path: '', component: BookingChartsSellsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingChartsSellsRoutingModule { }
