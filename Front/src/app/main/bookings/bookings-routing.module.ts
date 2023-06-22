import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsHomeComponent } from './bookings-home/bookings-home.component';

const routes: Routes = [
    { path: '', component: BookingsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
