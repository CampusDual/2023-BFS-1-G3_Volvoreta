import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ProductsViewComponent } from '../home/products-view/products-view.component';

@NgModule({
  declarations: [ProductsHomeComponent, ProductsDetailComponent, ProductsNewComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    OntimizeWebModule
  ]
})
export class ProductsModule { }
