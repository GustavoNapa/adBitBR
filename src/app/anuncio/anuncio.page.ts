import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  AdMobFree,
  AdMobFreeBannerConfig
} from "@ionic-native/admob-free/ngx";


@Component({
  selector: "app-anuncio",
  templateUrl: "./anuncio.page.html",
  styleUrls: ["./anuncio.page.scss"],
  providers: [AdMobFree]
})
export class AnuncioPage implements OnInit {
  public anuncio;

  bannerConfig: AdMobFreeBannerConfig = {
    isTesting: true, // Remove in production
    autoShow: true,
    // id: "ca - app - pub - 6841970055553388 / 5060817813"
  };

  constructor(private route: ActivatedRoute, private admobFree: AdMobFree) {}

  ngOnInit() {
    this.route.queryParams.subscribe(parametros => {
      if (parametros["anuncio"]) {
        this.anuncio = parametros["anuncio"];
      }
    });

    switch (this.anuncio) {
      case "ADS":
        this.admobFree.banner.config(this.bannerConfig);

        this.admobFree.banner
          .prepare()
          .then(() => {
            alert("Carregado");
          })
          .catch(e => console.log(e));
        break;
      default:
        break;
    }
  }
}
