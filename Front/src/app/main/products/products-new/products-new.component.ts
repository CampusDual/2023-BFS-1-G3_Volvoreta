import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  @ViewChild("stateC", {static: true}) selectC: OComboComponent;

  constructor() { }
  
  ngOnInit() {
  }
 defaultId(event){
    // if(event.length == 0){
      this.selectC.setValue(2);
    // }
 }
}
