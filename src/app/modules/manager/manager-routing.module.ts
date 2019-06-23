import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { MaintainProductsComponent } from './components/products/maintain-products/maintain-products.component';
import { ListPersonComponent } from './components/person/list-person/list-person.component';
import { MaintainPersonComponent } from './components/person/maintain-person/maintain-person.component';
import { ListRequestsComponent } from './components/requests/list-requests/list-requests.component';
import { MaintainRequestsComponent } from './components/requests/maintain-requests/maintain-requests.component';
import { LoginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  { path: 'listar/pessoa', component: ListPersonComponent,  canActivate: [LoginGuard] },
  { path: 'manter/pessoa', component: MaintainPersonComponent,  canActivate: [LoginGuard] },
  { path: 'manter/pessoa/:id', component: MaintainPersonComponent,  canActivate: [LoginGuard] },
  { path: 'listar/produto', component: ListProductsComponent,  canActivate: [LoginGuard] },
  { path: 'manter/produto', component: MaintainProductsComponent,  canActivate: [LoginGuard] },
  { path: 'manter/produto/:id', component: MaintainProductsComponent,  canActivate: [LoginGuard] },
  { path: 'listar/pedidos', component: ListRequestsComponent,  canActivate: [LoginGuard] },
  { path: 'manter/pedidos', component: MaintainRequestsComponent,  canActivate: [LoginGuard] },
  { path: 'manter/pedidos/:id', component: MaintainRequestsComponent,  canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
