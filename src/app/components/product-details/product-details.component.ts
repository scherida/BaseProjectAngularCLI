import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {

  private item: any = undefined;
  private product: Product;
  private inCart = false;
  private noProduct: boolean = true;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /* ================================== */
    /* quando alteramos o link ele vai    */
    /* ficar escutando para saber qual    */
    /* é o momento certo para recarregar  */
    /* o componente                       */
    /* ================================== */
    router.events.subscribe((val) => {
      if( val instanceof NavigationEnd ){
        this.toCharge();
      }
  });
    
  }

  private toCharge(){
    try {
      this.inCart = false;
      this.item = this.route.snapshot.params['item'];
      if (this.item != undefined && this.item != null && this.item != "") {
        this.noProduct = false;

        this.product = Product.cast(JSON.parse(this.item));
        this.product.addRemoveToCart(() => {
          this.inCart = false;
        });
        this.product.addAddToCart(() => {
          this.inCart = true;
        });
        this.inCart = this.cartService.inCart(this.product);
      }
    } catch (e) { }
  }

  ngOnInit() {}

  addToCard() {
    this.cartService.addProduct(this.product);
  }

  removeFromCart() {
    this.cartService.remove(this.product.key);
  }

}
