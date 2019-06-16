import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { MaintainProductsComponent } from './components/products/maintain-products/maintain-products.component';
import { ListPersonComponent } from './components/person/list-person/list-person.component';
import { MaintainPersonComponent } from './components/person/maintain-person/maintain-person.component';
import { ListRequestsComponent } from './components/requests/list-requests/list-requests.component';
import { MaintainRequestsComponent } from './components/requests/maintain-requests/maintain-requests.component';

const routes: Routes = [
  { path: 'listar/pessoa', component: ListPersonComponent },
  { path: 'manter/pessoa', component: MaintainPersonComponent },
  { path: 'manter/pessoa/:id', component: MaintainPersonComponent },

  { path: 'listar/produto', component: ListProductsComponent },
  { path: 'manter/produto', component: MaintainProductsComponent },
  { path: 'manter/produto/:id', component: MaintainProductsComponent },

  { path: 'listar/pedidos', component: ListRequestsComponent },
  { path: 'manter/pedidos', component: MaintainRequestsComponent },
  { path: 'manter/pedidos/:id', component: MaintainRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
