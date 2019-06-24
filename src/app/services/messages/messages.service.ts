import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: any[] = [];

  public add(status: string, message: string, settings: any) {
    var msg = {
      status: status,
      message: message,
      position: ( new Date().getTime() )
    };
    this.messages.push(msg);
    if ( settings ){
      if (settings.timeOut){
        setTimeout(()=>{
          this.remove(msg.position)
        }, settings.timeOut);
      }
    }
  }

  public remove(position: number) {
    for (var i = 0; i < this.messages.length; i++) {
      if (this.messages[i].position == position) {
        this.messages.splice(i, 1);
      }
    }
  }

  clear() {
    this.messages = [];
  }
}
