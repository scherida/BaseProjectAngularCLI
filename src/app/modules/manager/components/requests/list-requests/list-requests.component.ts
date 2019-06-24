import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { Router } from '@angular/router';
import { TablePaging } from 'src/app/models/TablePaging';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.scss']
})
export class ListRequestsComponent implements OnInit {

  private tablePaging: TablePaging = new TablePaging();

  private limit: any = 5;
  private mainList: any = [];
  private pagination: any = [];

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {
    this.search()
  }

  ngOnInit() {
  }
  select(item: any) {
    /* ====================================================================== */
    /* esse método é utilizado para navedar para a tela de edição ou cadastro.*/
    /* caso 'item' seja igual a -1 assumiremos que o usuário deseja cadastrar */
    /* um novo pedido.                                                       */
    /* ====================================================================== */
    if (item == -1) {
      this.router.navigate(['/manter/pedidos']);
    } else {
      this.router.navigate(['/manter/pedidos/', { item: JSON.stringify(item) }]);
    }

  }

  toPage(position) {
    /* ================================================== */
    /* navegação para a página selecionada da lista       */
    /* ================================================== */
    this.tablePaging.sync(position, this.limit);
  }

  search() {
    this.communicationService.request("listar/pedido", {}, (response: any) => {

      /* ================================================== */
      /* inicialização do objeto de páginação               */
      /* ================================================== */
      this.tablePaging.onInit(response, 5, 1, (list, paginationList) => {
        this.mainList = list;
        this.pagination = paginationList;
      });

    });
  }
}
