import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsStore } from 'src/app/store/products.store';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  product: Products

  constructor(private productStore: ProductsStore) { 
    this.productStore.getProductDB().subscribe(res => this.product = res)
    console.log(this.product)

  }

  ngOnInit() {
  }

}
