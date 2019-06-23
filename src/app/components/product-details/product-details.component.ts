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
      if (this.item == undefined || this.item == null || this.item == "") {
        this.product = new Product;
        this.product.DetailedDescription = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";
        this.product.briefDescription = " O meu bolo de uva é simplesmente delicioso e integral, ele fica úmido e ao comer você encontra muitas pequenas surpresas que conferem doçura e acidez ao bolo.";
        this.product.images = [];
        this.product.key = "chave";
        this.product.name = "Bolo de banana";
        this.product.value = 5000;
      } else {
        this.product = Product.cast(JSON.parse(this.item));
      }

      this.product.addRemoveToCart(() => {
        this.inCart = false;
      });
      this.product.addAddToCart(() => {
        this.inCart = true;
      });
      this.inCart = this.cartService.inCart(this.product);
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
