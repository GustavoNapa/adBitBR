import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: "root"
})
export class ToastService {
  private cabecalho = "";
  private mensagem = "";
  private duracao = 5000;

  constructor(public toastController: ToastController) {}

  public async toast(mensage) {
    if(mensage){
      this.mensagem = mensage;
    }

    const toast = await this.toastController.create({
      header: this.cabecalho,
      message: this.mensagem,
      duration: this.duracao
    });
    toast.present();
  }
}
