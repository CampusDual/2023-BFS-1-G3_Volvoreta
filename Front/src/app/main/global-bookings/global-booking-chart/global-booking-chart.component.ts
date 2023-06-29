import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve.service';

@Component({
  selector: 'app-global-booking-chart',
  templateUrl: './global-booking-chart.component.html',
  styleUrls: ['./global-booking-chart.component.css']
})
export class GlobalBookingChartComponent implements OnInit {

  constructor(private reserveService: ReserveService) {

   }

  ngOnInit() {
    this.reserveService.getReserveDate().subscribe(res => console.log(res.data))
  }

}
