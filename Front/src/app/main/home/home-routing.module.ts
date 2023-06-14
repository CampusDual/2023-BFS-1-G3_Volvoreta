import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductsViewComponent } from './products-view/products-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: ":ID", component: ProductsViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
