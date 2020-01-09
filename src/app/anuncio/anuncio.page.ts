import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-anuncio",
  templateUrl: "./anuncio.page.html",
  styleUrls: ["./anuncio.page.scss"]
})
export class AnuncioPage implements OnInit {
  public anuncio;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(parametros => {
      if (parametros["anuncio"]) {
        this.anuncio = parametros["anuncio"];
      }
    });
  }
}
