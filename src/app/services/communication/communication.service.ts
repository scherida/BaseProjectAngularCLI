import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { PersonReq } from './requests/PersonReq';
import { ProductsReq } from './requests/ProductsReq';
import { RequestsReq } from './requests/RequestsReq';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private personReq: PersonReq;
  private productsReq: ProductsReq;
  private requestsReq: RequestsReq;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.personReq = new PersonReq(this.db);
    this.productsReq = new ProductsReq(this.db);
  }

  public request(path: string, data: any, callback: any): void {
    // path = caminho do que estamos querendo obter ou salvar os dados
    // data = dados para serem utilizados nas funções
    // callback = uma função para ser executada quando a requisição ser finalizada

    // para saber qual função realizar, verificamos o caminho 
    switch (path) {

      /* ================================================ */
      /*                    pessoas                       */
      /* ================================================ */
      case "manter/pessoa":
        // utilizamos um método para realizar a requisição para o firebase,
        // passe sempre o 'callback', pois a função da classe é quem vai chama-la.
        this.personReq.maintain(data, callback);
        break;

      case "listar/pessoa":
        this.personReq.list(callback);
        break;

      case "deletar/pessoa":
        this.personReq.delete(data, callback);
        break;

      /* ================================================ */
      /*                    produtos                      */
      /* ================================================ */
      case "manter/produto":
        this.productsReq.maintain(data, callback);
        break;

      case "listar/produto":
        this.productsReq.list(callback);
        break;

      case "deletar/produto":
        this.productsReq.delete(data, callback);
        break;

      /* ================================================ */
      /*                    Pedidos                       */
      /* ================================================ */
      case "manter/pedido":
        this.requestsReq.maintain(data, callback);
        break;

      case "listar/pedido":
        this.requestsReq.list(callback);
        break;

      case "deletar/pedido":
        this.requestsReq.delete(data, callback);
        break;
    }

  }

}
