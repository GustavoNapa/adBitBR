import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: "app-carteira",
  templateUrl: "./carteira.page.html",
  styleUrls: ["./carteira.page.scss"]
})
export class CarteiraPage implements OnInit {
  public carteira = {
    nome: "Gustavo Souza",
    nivel: "Madeira",
    balanco: 1525,
    qtde_cliques: 500,
    qtde_tempo: 17504,
    qtde_afiliados: 3,
    qtde_afiliados_ind: 5,
    valor_afiliados: 500
  };

  constructor(
    private fireDataBase: AngularFireDatabase
  ) {}

  ngOnInit() {}
}
