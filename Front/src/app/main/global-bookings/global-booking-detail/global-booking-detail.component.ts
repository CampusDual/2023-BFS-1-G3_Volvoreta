import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-global-booking-detail',
  templateUrl: './global-booking-detail.component.html',
  styleUrls: ['./global-booking-detail.component.css']
})
export class GlobalBookingDetailComponent implements OnInit {
  @ViewChild("gState", { static: true }) gState: OComboComponent;
  @ViewChild("detailGlobalBooking", { static: true }) detailGlobalBooking: OFormComponent;
  //@ViewChild("picked", { static: true }) picked: ODateInputComponent;

  enabled: boolean;
  

  constructor() {
    this.enabled = false;
  }


  ngOnInit() {
  }

  delivered(event){
    const { type } = event
    
    console.log(event)
    // console.log(event.type)
    // console.log(newValue)
    // console.log(oldValue)
    // console.log(this.rState.getValue())
    // console.log(this.rState.getSelectedItems())
    // console.log(this.rState.getSelectedRecord())

    if(Number(this.gState.getValue()) == 2 && type == 1){
      this.enabled = false;
      document.getElementById("gPicked").setAttribute("style", "display:none");
    } else if(Number(this.gState.getValue()) == 3 && type == 1){
      this.enabled = false;
      document.getElementById("gPicked").setAttribute("style", "display:flex");
    }
    else {
      if(Number(this.gState.getValue()) == 1 || type == 0){
        this.enabled = true;
        document.getElementById("gPicked").setAttribute("style", "display:none");
      }      
    }
    
    // this.enabled = (Number(this.rState.getValue()) == 2 && type == 1) ? false : true;

  }

}
