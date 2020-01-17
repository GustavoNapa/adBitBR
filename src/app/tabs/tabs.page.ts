import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public visible_perfil = false;
  public visible_carteira = false;

  constructor(
  ) {
    if (localStorage.getItem("userUid")) {
      this.visible_perfil = true;
    }
  }
}
