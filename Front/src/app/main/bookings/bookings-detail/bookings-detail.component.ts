import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent, ODateInputComponent, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-bookings-detail',
  templateUrl: './bookings-detail.component.html',
  styleUrls: ['./bookings-detail.component.css']
})
export class BookingsDetailComponent implements OnInit {
  @ViewChild("rState", { static: true }) rState: OComboComponent;
  @ViewChild("detailBooking", { static: true }) detailBooking: OFormComponent;
  //@ViewChild("picked", { static: true }) picked: ODateInputComponent;

  enabled: boolean;
  

  constructor() {
    this.enabled = false;
  }

  ngOnInit() { }
  
  enable(event){
    const { type } = event
    
    console.log(event)
    // console.log(event.type)
    // console.log(newValue)
    // console.log(oldValue)
    // console.log(this.rState.getValue())
    // console.log(this.rState.getSelectedItems())
    // console.log(this.rState.getSelectedRecord())

    if(Number(this.rState.getValue()) == 2 && type == 1){
      this.enabled = false;
      document.getElementById("picked").setAttribute("style", "display:none");
    } else {
      if(Number(this.rState.getValue()) == 1 || type == 0){
        this.enabled = true;
        document.getElementById("picked").setAttribute("style", "display:none");
      } else {
        document.getElementById("iState").setAttribute("style", "display:none");
      }
      
    }
    
    // this.enabled = (Number(this.rState.getValue()) == 2 && type == 1) ? false : true;

  }
}
