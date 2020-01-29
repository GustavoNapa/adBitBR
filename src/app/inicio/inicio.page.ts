import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"]
})
export class InicioPage implements OnInit {
  public nome_do_app = "AdBitBR";

  card = {
    titulo: "Bem vindo ao " + this.nome_do_app,
    subtitulo: "Sua torneita de BitCoins",
    texto:
      "Clique em anuncios para conseguir BitCoins, cada anuncio possui uma gratificação por sua visualização e você deve obedecer o tempo de permanencia pré estabelecido por cada um deles"
  };

  constructor(
  ) {}

  ngOnInit() { 
  }
}
