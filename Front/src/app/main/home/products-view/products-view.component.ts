import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { imageDefaulProdut } from 'src/app/utils/constants';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ReserveDialogComponent } from './reserve-dialog/reserve-dialog.component';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  product: Products = new Products()
  contentView: FormGroup = new FormGroup({});
  id: number;
  imagePath: SafeResourceUrl = "data:image/png;base64," + imageDefaulProdut
  constructor(
    private productService: ProductService, 
    private actRoute: ActivatedRoute, 
    private _sanitizer: DomSanitizer,
    private router: Router,
    public dialog: MatDialog, 
  ) { }

  ngOnInit() {
    // Get id param
    this.actRoute.params.subscribe((params: Params) => {
      this.id = Number(params['id'])
    });

    // Get product by id
    this.productService.getById(this.id).subscribe(res => {

      if (res.code === 0) {
        this.product = res.data[0]

        this.imagePath = (this.product.photo === undefined) || (this.product.photo === null)
          ? this.imagePath
          : this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
            + this.product.photo);
      }
    }, err => console.log(err))
  }

  reserve(value: string) {
    let totalImport: number = Number(this.product.price) * Number(value);
    this.dialog.open(ReserveDialogComponent, {data: {product: this.product, units: value, totalImport: totalImport}});
  }

  turnback(){
    this.router.navigate(['../../', 'home'], { relativeTo: this.actRoute });
  }
}
