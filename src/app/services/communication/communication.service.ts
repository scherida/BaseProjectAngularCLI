import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { PersonReq } from './requests/PersonReq';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private personReq: PersonReq;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.personReq = new PersonReq(this.db);
  }

  public request(path: string, data: any, callback: any): void {
    // path = caminho do que estamos querendo obter ou salvar os dados
    // data = dados para serem utilizados nas funções
    // callback = uma função para ser executada quando a requisição ser finalizada

    // para saber qual função realizar, verificamos o caminho 
    switch (path) {

      // salvar uma pessoa
      case "manter/pessoa":
        // utilizamos um método para realizar a requisição para o firebase,
        // passe sempre o 'callback', pois a função da classe é quem vai chama-la.
        this.personReq.maintain(data, callback);
        break;

      case "listar/pessoa":
        this.personReq.list(callback);
        break;

      case "deletar/pessoa":
        this.personReq.delete(data,callback);
        break;
    }

  }

}
