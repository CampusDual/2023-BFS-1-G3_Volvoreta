import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

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
