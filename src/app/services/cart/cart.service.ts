import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CommunicationService } from '../communication/communication.service';
import { Requests } from 'src/app/models/Requests';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: any[] =[];
  private request: Requests;

  constructor(
    private communicationService: CommunicationService
  ) { }

  public addProduct( product: Product ){
    this.list.push(product);
    console.log(this.list);
  }

  public remove(key: string){
    for (var i = 0; i < this.list.length; i++) {
      if(this.list[i].key == key){
      this.list.splice(i, 1);
      break;
      }
    }
    console.log(this.list);
  }

  public finalize() {
    this.request = new Requests();
    this.request.idsProducts = this.list;
    this.communicationService.request("manter/pedido", this.request,
      (result) => {
        console.log(result);
      }
    );
  }
} 