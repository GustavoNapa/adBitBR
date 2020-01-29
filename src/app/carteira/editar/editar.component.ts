import { CarteiraDataService } from './../shared/carteira-data.service';
import { CarteiraService } from './../shared/carteira.service';
import { Carteira } from './../shared/carteira';
import { Component, OnInit } from '@angular/core';

// import { Component, OnInit, Input } from '@angular/core';
// import { Contato } from '../shared/contato';
// import { ContatoService } from '../shared/contato.service';
// import { ContatoDataService } from '../shared/contato-data.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  carteira: Carteira;
  key: string = '';

  constructor(private carteiraS: CarteiraService, private carteiraDS: CarteiraDataService) { }

  ngOnInit() {
    this.carteira = new Carteira();

    this.carteiraDS.currentCarteira.subscribe(data => {
      if (data.carteira && data.key) {
        this.carteira = new Carteira();
        this.carteira.nome = data.carteira.nome;
        this.carteira.numeroCliques = data.carteira.numeroCliques;
        this.carteira.patente = data.carteira.patente;
        this.carteira.satoshis = data.carteira.satoshis;
        this.carteira.tempoEmAnuncios = data.carteira.tempoEmAnuncios;

        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.carteiraS.atualizar(this.carteira, this.key);
    }else{
      this.carteiraS.inserir(this.carteira);
    }

    this.carteira = new Carteira();
  }

}
