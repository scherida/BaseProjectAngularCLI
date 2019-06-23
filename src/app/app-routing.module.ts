import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'detalhe/produto', component: ProductDetailsComponent },
  { path: 'detalhe/produto/:item', component: ProductDetailsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'inicio', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
