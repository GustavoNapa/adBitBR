import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  public perfil = {
    nome: "Gustavo Souza",
    nivel: "Madeira",
    balanco: 1525,
    qtde_cliques: 500,
    qtde_tempo: 17504,
    qtde_afiliados: 3,
    qtde_afiliados_ind: 5,
    valor_afiliados: 500
  };

  constructor() {}

  ngOnInit() {}
}
