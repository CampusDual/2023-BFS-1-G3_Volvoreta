import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ProductsViewComponent } from './products-view/products-view.component';


const routes: Routes = [

  {
    path: '',
    component: ProductsHomeComponent
  },
  { path: "product/:ID", component: ProductsViewComponent},
  {  path: "new", component: ProductsNewComponent },
  {  path: ":ID",  component: ProductsDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
