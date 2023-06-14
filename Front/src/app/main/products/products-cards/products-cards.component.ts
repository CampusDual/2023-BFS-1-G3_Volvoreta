import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsStore } from 'src/app/store/products.store';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent implements OnInit {



  constructor(private cd: ChangeDetectorRef, private router: Router, private productStore: ProductsStore) { }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  ngOnInit() {
  }

  showProduct(product: Products){
    this.router.navigate(['/main/home/' + product.ID])
  }

}
