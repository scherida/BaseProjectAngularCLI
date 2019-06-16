import { Component, OnInit } from '@angular/core';
import { TablePaging } from 'src/app/models/TablePaging';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  private tablePaging: TablePaging = new TablePaging();

  private limit: any = 5;
  private mainList: any = [];
  private pagination: any = [];

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {
    // for (var i = 0; i < 10; i++) {
    //   var p: Product = new Product();
    //   p.key = i + "";
    //   p.name = "produto " + i;
    //   p.value = 10000;
    //   this.mainList.push(p);
    // }


  }

  ngOnInit() {
    this.search();
  }

  select(item: number) {
    /* ====================================================================== */
    /* esse método é utilizado para navedar para a tela de edição ou cadastro.*/
    /* caso 'item' seja igual a -1 assumiremos que o usuário deseja cadastrar */
    /* um novo produto.                                                       */
    /* ====================================================================== */
    if (item == -1) {
      this.router.navigate(['/manter/produto']);
    } else {
      this.router.navigate(['/manter/produto/', { item: JSON.stringify(item) }]);
    }

  }

  toPage(position) {
    /* ================================================== */
    /* navegação para a página selecionada da lista       */
    /* ================================================== */
    this.tablePaging.sync(position, this.limit);
  }

  search() {
    this.communicationService.request("listar/produto", {}, (response: any) => {

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
