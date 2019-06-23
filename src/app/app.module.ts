import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    NavBarComponent,
    MonetaryPipe,
    ReguestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    ManagerModule
  ],
  providers: [
    AngularFireDatabase,
    MonetaryPipe,
    SessionService
  ],
  exports: [
    MonetaryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
