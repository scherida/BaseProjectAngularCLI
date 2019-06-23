import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication/communication.service';

import $ from "jquery";
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-products',
  templateUrl: './slide-products.component.html',
  styleUrls: ['./slide-products.component.scss']
})
export class SlideProductsComponent implements OnInit {

  private element: any;
  private mainList: any[] = [];

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {
    this.communicationService.request("listar/produto", {}, (response)=>{
      this.mainList = response;
    });
  }

  ngOnInit() {
    this.element = $("#block");
  }

  toLeft() {
    this.element.scroll();
    this.element.animate({
			"scrollLeft": "-=200px"
		}, 200);
  }

  toRight() {
    this.element.scroll();
    this.element.animate({
			"scrollLeft": "+=200px"
		}, 200);
  }

  select(item: any) {
    if (item == -1) {
      
    } else {
      this.router.navigate(['/detalhe/produto/', { item: JSON.stringify(item) }]);
    }

  }
}
