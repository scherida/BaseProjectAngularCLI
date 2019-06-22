import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {

  private product : Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.product = {
      DetailedDescription: "Descriçãp detalhada",
      briefDescription: "Descrição detalhada simples",
      images: [],
      key:"chave",
      name:"Bolo de banana",
      value: 5000
    };

    this.addToCard();

    //setTimeout(
      //() => {
       //this.cartService.remove(this.product.key);
     // }, 1000);

     setTimeout(
      () => {
       this.cartService.finalize();
      }, 1000);
  }

  addToCard(){
    this.cartService.addProduct(this.product)
  }

}
