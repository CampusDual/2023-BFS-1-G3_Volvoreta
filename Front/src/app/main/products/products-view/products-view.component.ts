import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { ProductsStore } from 'src/app/store/products.store';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  product: Products
  

  constructor(private productStore: ProductsStore, private productService: ProductService, private actRoute: ActivatedRoute) { 

    // this.actRoute.queryParams.subscribe(params => {
    //   console.log(""params)
    //   if (params) {
    //     const isDetail = params['ID'];
    //     console.log(isDetail)
    //   }
    // });

    this.productStore.getProductDB().subscribe(res => this.product = res)
    //this.productService.getById()
    console.log(this.product)

  }

  ngOnInit() {
  }

}
