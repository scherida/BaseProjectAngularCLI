import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requests } from 'src/app/models/Requests';

@Component({
  selector: 'app-maintain-requests',
  templateUrl: './maintain-requests.component.html',
  styleUrls: ['./maintain-requests.component.scss']
})
export class MaintainRequestsComponent implements OnInit {

  private modalRef: BsModalRef;
  private item: any = undefined;
  private requests: Requests = new Requests();

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
        this.requests = JSON.parse(this.item);
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
    this.communicationService.request("manter/pedido", JSON.parse(JSON.stringify(this.requests)), (response: any) => {
      try {
        this.requests.key = response.key
      } catch (e) { }
    });
  }

  private delete() {
    this.communicationService.request("deletar/pedido", this.requests, (response: any) => {
      try {
        console.log(response);
        this.router.navigate(['/listar/pedidos']);
        this.modalService.hide(1);
      } catch (e) { }
    });
  }

  select(item: any) {
    /* ====================================================================== */
    /* esse método é utilizado para navedar para a tela de edição ou cadastro.*/
    /* caso 'item' seja igual a -1 assumiremos que o usuário deseja cadastrar */
    /* um novo produto.                                                       */
    /* ====================================================================== */
    if (item == -1) {
      this.router.navigate(['/detalhe/produto']);
    } else {
      this.router.navigate(['/detalhe/produto/', { item: JSON.stringify(item) }]);
    }

  }

  private removeProduct(item: any){
    for(var i = 0; i < this.requests.products.length; i++){
      if(this.requests.products[i].key == item.key){
        this.requests.products.splice(i,1);
      }
    }
  }

  private openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
