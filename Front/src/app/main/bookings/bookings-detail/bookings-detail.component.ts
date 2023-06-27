import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-bookings-detail',
  templateUrl: './bookings-detail.component.html',
  styleUrls: ['./bookings-detail.component.css']
})
export class BookingsDetailComponent implements OnInit {
  @ViewChild("rState", { static: true }) rState: OComboComponent;

  enabled: boolean;

  constructor() {
    this.enabled = false;
  }

  ngOnInit() {
  }

  enable(event){
    const { type } = event
    
    // console.log(event)
    // console.log(event.type)
    // console.log(newValue)
    // console.log(oldValue)
    // console.log(this.rState.getValue())
    // console.log(this.rState.getSelectedItems())
    // console.log(this.rState.getSelectedRecord())
    
    this.enabled = (Number(this.rState.getValue()) == 2 && type == 1) ? false : true;

  }

}
