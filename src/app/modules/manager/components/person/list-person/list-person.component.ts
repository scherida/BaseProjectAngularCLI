import { Component, OnInit } from '@angular/core';
import { TablePaging } from 'src/app/models/TablePaging';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  /* ================================================== */
  /* Essa é uma classe de paginação, para mais detalhes */
  /* precione 'Ctrl'+ o botão esquerdo do mouse em cima */
  /* de 'TablePaging' ou 'TablePaging();'               */
  /* ================================================== */
  private tablePaging: TablePaging = new TablePaging();

  private limit: any = 5;
  private mainList: any = [];
  private pagination: any = [];

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.search();
  }

  toPage(position) {
    /* ================================================== */
    /* navegação para a página selecionada da lista       */
    /* ================================================== */
    this.tablePaging.sync(position, this.limit);
  }

  select(item: number) {
    /* ====================================================================== */
    /* esse método é utilizado para navedar para a tela de edição ou cadastro.*/
    /* caso 'item' seja igual a -1 assumiremos que o usuário deseja cadastrar */
    /* uma nova pessoa.                                                       */
    /* ====================================================================== */
    if (item == -1) {
      this.router.navigate(['/manter/pessoa']);
    } else {
      this.router.navigate(['/manter/pessoa/', { item: JSON.stringify(item) }]);
    }

  }

  search() {
    this.communicationService.request("listar/pessoa", {}, (response: any) => {

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
