import { CarteiraDataService } from './../shared/carteira-data.service';
import { CarteiraService } from './../shared/carteira.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carteira } from './../shared/carteira';

// import { Contato } from './../shared/contato';
// import { Component, OnInit } from '@angular/core';
// import { ContatoService } from '../shared/contato.service';
// import { Observable } from 'rxjs';
// import { ContatoDataService } from '../shared/contato-data.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  public carteiras: Observable<any>;

  constructor(private carteiraS: CarteiraService, private carteiraDS: CarteiraDataService) { }

  ngOnInit() {
    this.carteiras = this.carteiraS.listarTodas();
  }

//   delete(key: string) {
//     this.contatoService.delete(key);
//   }

//   edit(contato: Contato, key: string) {
//     this.contatoDataService.changeContato(contato, key);
//   }

}

