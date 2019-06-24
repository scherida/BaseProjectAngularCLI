import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CommunicationService } from '../communication/communication.service';
import { Requests } from 'src/app/models/Requests';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';
import { Constants } from 'src/app/models/Constants';
import { Person } from 'src/app/models/Person';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: Product[] = [];
  private request: Requests;


  constructor(
    private communicationService: CommunicationService
  ) { }

  get() : Product[] {
    return this.verifyMyList();
  }

  public inCart(product: Product): boolean {
    /* ======================================================== */
    /*   verivicação para saber se o produto está no carrinho   */
    /* ======================================================== */
    try {
      /* ======================================================================== */
      /* Esse método tenta captuar do localStorange caso a lista esteja iniciada, */
      /* também é para previnir erros ao recarregar a página ( 'F5' )             */
      /* a 'Constants.CART_SERVICE' é uma variavel a qual armezena a chave para   */
      /* diferenciar esse objeto dos outros que estão guardados no memória do     */
      /* navegador.                                                               */
      /* ======================================================================== */
      this.verifyMyList();
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].key == product.key) {
          this.list[i] = product;
          SessionService.setItem(Constants.CART_SERVICE, JSON.stringify(this.list));
          return true;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  public addProduct(product: Product) {
    this.list.push(product);
    product.addToCart();
    SessionService.setItem(Constants.CART_SERVICE, JSON.stringify(this.list));
  }

  public remove(key: string) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].key == key) {
        this.list[i].removeToCart();
        this.list.splice(i, 1);
        SessionService.setItem(Constants.CART_SERVICE, JSON.stringify(this.list));
        break;
      }
    }
  }

  public finalize(idPerson: string, coupon: string, deliveryMode: string, date: string) {
    this.request = new Requests();
    this.request.idPerson = idPerson;
    this.request.coupon = coupon;
    this.request.date = date;
    this.request.deliveryMode = deliveryMode;
    this.request.products = this.list;
    this.request.amount = this.calculate();
    this.communicationService.request("manter/pedido", this.request,
      (result) => {
        console.log(result);
      }
    );
  }

  private calculate() : number{
    var finalValue = 0;
    for (var i = 0; i < this.list.length; i++) {
      finalValue = finalValue + parseInt(this.list[i].value+"");
    }
    return finalValue
  }

  private verifyMyList(){
    try{
      if (this.list == undefined || this.list.length == undefined || this.list.length == 0) {
        this.list = JSON.parse(
          SessionService.getItem(Constants.CART_SERVICE)
        );
      }
    } catch(e){
      this.list = [];
    }
    return this.list;
  }
} 