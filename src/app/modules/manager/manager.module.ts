import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { MaintainProductsComponent } from './components/products/maintain-products/maintain-products.component';
import { ListPersonComponent } from './components/person/list-person/list-person.component';
import { MaintainPersonComponent } from './components/person/maintain-person/maintain-person.component';
import { ListRequestsComponent } from './components/requests/list-requests/list-requests.component';
import { MaintainRequestsComponent } from './components/requests/maintain-requests/maintain-requests.component';
import { FormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';

export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    ListProductsComponent, 
    MaintainProductsComponent, 
    ListPersonComponent, 
    MaintainPersonComponent, 
    ListRequestsComponent, 
    MaintainRequestsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ManagerRoutingModule,
    NgxMaskModule.forRoot(options),
    NgxPhoneMaskBrModule
  ],
  exports: [
    ListProductsComponent, 
    MaintainProductsComponent, 
    ListPersonComponent, 
    MaintainPersonComponent, 
    ListRequestsComponent, 
    MaintainRequestsComponent
  ]
})
export class ManagerModule { }
