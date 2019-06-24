import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TablePaging } from 'src/app/models/TablePaging';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  /* ================================================== */
  /* Essa é uma classe de paginação, para mais detalhes */
  /* precione 'Ctrl'+ o botão esquerdo do mouse em cima */
  /* de 'TablePaging' ou 'TablePaging();'               */
  /* ================================================== */
  private tablePaging: TablePaging = new TablePaging();

  private limit: any = 5;
  private mainList: any = [];
  private pagination: any = [];
  private modalRef: BsModalRef;

  private form: any = {
    person: new Person(),
    deliveryMode: 0,
    coupon: ""
  }


  constructor(
    private communicationService: CommunicationService,
    private cartService: CartService,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.tablePaging.onInit(cartService.get(), 5, 1, (list, paginationList) => {
      this.mainList = list;
      this.pagination = paginationList;
    });
  }

  ngOnInit() {
  }

  toPage(position) {
    /* ================================================== */
    /* navegação para a página selecionada da lista       */
    /* ================================================== */
    this.tablePaging.sync(position, this.limit);
  }

  select(item: any) {
    if (item == -1) { } else {
      this.router.navigate(['/detalhe/produto/', { item: JSON.stringify(item) }]);
    }
  }

  private openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public finalize() {
    this.form.person.key = "";
    if (
      (this.form == undefined || this.form.person == undefined) ||
      (this.form.person.email == undefined || this.form.person.email == "") ||
      (this.form.person.phone == undefined || this.form.person.phone == "") ||
      (this.form.person.cep == undefined || (this.form.deliveryMode == 1 && this.form.person.cep == "")) ||
      (this.form.person.street == undefined || (this.form.deliveryMode == 1 && this.form.person.street == "")) ||
      (this.form.coupon == undefined) ||
      (this.form.date == undefined || this.form.date == "") ||
      (this.form.deliveryMode == undefined || this.form.deliveryMode == "")
    ) {

    } else {
      this.communicationService.request("manter/pessoa", this.form.person, (response: any) => {
        try {
          this.cartService.finalize(response.key, this.form.coupon, this.form.deliveryMode, this.form.date);
        } catch (e) { }
      });
    }
  }

}
