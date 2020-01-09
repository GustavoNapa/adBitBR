import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-ads",
  templateUrl: "./ads.page.html",
  styleUrls: ["./ads.page.scss"]
})
export class AdsPage implements OnInit {
  public nome_do_app = "AdBitBR";

  card = {
    titulo: "Escolha a modalidade de anuncio você prefere",
    subtitulo: "Sua torneita de BitCoins",
    texto:
      "Clique em anuncios para conseguir BitCoins, cada anuncio possui uma gratificação por sua visualização e você deve obedecer o tempo de permanencia pré estabelecido por cada um deles"
  };

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  public abrirAnuncio(anuncio) {
    this.navCtrl.navigateForward("anuncio?anuncio="+anuncio);
  }
}
