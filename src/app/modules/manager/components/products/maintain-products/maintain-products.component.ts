import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.scss']
})
export class MaintainProductsComponent implements OnInit {

  private modalRef: BsModalRef;
  private item: any = undefined;
  private product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private communicationService: CommunicationService,
    private modalService: BsModalService,
    private router: Router
  ) {
    /* ======================================================================== */
    /*    O método 'constructor' sempre vai ser o primiro método a ser          */
    /*    executado quando esse componente for chamado. Nele verificamos se     */
    /*    temos o objeto ('item') do produto para editar, caso ele não encontre */
    /*    nenhum, assumiremos que o usuário deseja criar um novo produto        */
    /* ======================================================================== */
    try {
      this.item = this.route.snapshot.params['item'];
      if (this.item == undefined || this.item == null || this.item == "") {

      } else {
        /* =================================================== */
        /* Como aqui já temos o objeto da pessoa a ser editada */
        /* temos que desserializar esse objeto, para converter */
        /* o texto para um objeto. essa conversão é feita pela */
        /* função 'JSON.parse()'                               */
        /* =================================================== */
        this.product = JSON.parse(this.item);
      }
    } catch (e) { }
  }

  ngOnInit() {
  }

  private save() {
    /* ========================================== */
    /* esse método é utilizado tanto para editar  */
    /* ou para cadastrar uma nova pessoa          */
    /* ========================================== */
    this.communicationService.request("manter/produto", JSON.parse(JSON.stringify(this.product)), (response: any) => {
      try {
        this.product.key = response.key
      } catch (e) { }
    });
  }

  private delete() {
    this.communicationService.request("deletar/produto", this.product, (response: any) => {
      try {
        console.log(response);
        this.router.navigate(['/listar/produto']);
        this.modalService.hide(1);
      } catch (e) { }
    });
  }

  private openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
