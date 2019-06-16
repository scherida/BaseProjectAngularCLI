import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { Person } from 'src/app/models/Person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintain-person',
  templateUrl: './maintain-person.component.html',
  styleUrls: ['./maintain-person.component.scss']
})
export class MaintainPersonComponent implements OnInit {

  private item: any = undefined;
  private person: Person = new Person();

  constructor(
    private route: ActivatedRoute,
    private communicationService: CommunicationService
  ) {
    /* ======================================================================== */
    /*    O método 'constructor' sempre vai ser o primiro método a ser          */
    /*    executado quando esse componente for chamado. Nele verificamos se     */
    /*    temos o objeto ('item') da pessoa para editar, caso ele não encontre  */
    /*    nenhum, assumiremos que o usuário deseja criar uma nova pessoa        */
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
        this.person = JSON.parse(this.item);
      }
    } catch (e) { }
  }

  ngOnInit() {

  }

  private save() {
    /* ========================================== */
    /* esse método é utilizado tanto para editar, */
    /* quanto cadastrar uma nova pessoa           */
    /* ========================================== */
    this.communicationService.request("manter/pessoa", this.person, (response: any) => {
      try{
        this.person.key = response.key
      } catch(e){}
    });
  }

}
