import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule, ReactiveFormsModule ],
  declarations: [LoginPage]
})
export class LoginPageModule {
  private login = false;

  constructor(private navCtrl: NavController) {}

  public logar() {
    this.navCtrl.navigateForward("login");
    // this.tabs.visible_carteira = true;
    // this.tabs.visible_perfil = true;
  }

  public getLogin() {
    return this.login;
  }

  public setLogin(value:boolean) {
    this.login = value;
  }
}
