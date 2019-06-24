import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { ManagerModule } from './modules/manager/manager.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MonetaryPipe } from './pipes/monetary.pipe';
import { ReguestComponent } from './components/reguest/reguest.component';
import { SessionService } from './services/session/session.service';
import { SlideProductsComponent } from './components/slide-products/slide-products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { MessagesService } from './services/messages/messages.service';
import { ToastComponent } from './components/toast/toast.component';

export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    NavBarComponent,
    MonetaryPipe,
    ReguestComponent,
    SlideProductsComponent,
    CartComponent,
    LoginComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    ManagerModule,
    NgxPhoneMaskBrModule,
    NgxMaskModule.forRoot(options),
    NgxPhoneMaskBrModule
  ],
  providers: [
    AngularFireDatabase,
    MonetaryPipe,
    SessionService,
    MessagesService,
    AngularFireAuthModule,
    AngularFireAuth,
    LoginGuard
  ],
  exports: [
    MonetaryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
