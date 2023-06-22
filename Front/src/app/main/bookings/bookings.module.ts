import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsHomeComponent } from './bookings-home/bookings-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [BookingsHomeComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    OntimizeWebModule
  ]
})
export class BookingsModule { }
