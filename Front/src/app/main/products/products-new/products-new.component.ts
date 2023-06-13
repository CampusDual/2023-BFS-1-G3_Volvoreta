import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {

  constructor() { }
  getDataArray() {
    const array: Array<Object> = [];
    array.push({
      'key': 0,
      'value': 'false'
    });
    array.push({
      'key': 1,
      'value': 'true'
    });
    
    return array;
  }

  ngOnInit() {
  }

}
