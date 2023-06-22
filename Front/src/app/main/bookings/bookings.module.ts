import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsHomeComponent } from './bookings-home/bookings-home.component';


@NgModule({
  declarations: [BookingsHomeComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
