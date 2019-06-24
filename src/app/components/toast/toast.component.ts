import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(
    public messagesService : MessagesService 
  ) { }

  ngOnInit() {
    // this.messagesService.add("primary","asd", {});
    // this.messagesService.add("danger","asd", {});
    // this.messagesService.add("success","asd", {});
    // this.messagesService.add("warning","asd", {});
    // this.messagesService.add("info","asd", {});
    // this.messagesService.add("light","asd", {});
    // this.messagesService.add("dark","asd", {});
  }

  close( position : number ){
    this.messagesService.remove(position);
  }

}
