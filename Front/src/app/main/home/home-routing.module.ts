import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductsCardsComponent } from '../products/products-cards/products-cards.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  //{path: ':ID', component: ProductsCardsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
