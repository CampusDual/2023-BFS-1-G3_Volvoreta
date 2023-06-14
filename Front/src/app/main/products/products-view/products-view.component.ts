import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { imageDefaulProdut } from 'src/app/utils/constants';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  product: Products = new Products()

  id: number;
  imagePath: SafeResourceUrl = "data:image/png;base64," + imageDefaulProdut
  constructor(private productService: ProductService, private actRoute: ActivatedRoute, private _sanitizer: DomSanitizer) { }

  ngOnInit() { 
        // Get ID param
        this.actRoute.params.subscribe((params: Params) => {
          this.id = Number(params['ID'])
        });
    
        // Get product by ID
        this.productService.getById(this.id).subscribe(res => {
    
          if (res.code === 0) {
            this.product = res.data[0]
            
            this.imagePath = (this.product.PHOTO === undefined) || (this.product.PHOTO === null) 
            ? this.imagePath 
            : this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
              + this.product.PHOTO);
          }
        }, err => console.log(err))
  }

}
