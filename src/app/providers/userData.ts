import {Injectable} from "@angular/core";

@Injectable()
export class ConfigUser {
  private user = {
    uid: false,
    name: false,
    username: false,
    email: false,
    telefone: false,
    carteira: false
  };

  user_key_name = "user";

  constructor() {}

  public getUser() {
    return localStorage.getItem(this.user_key_name);
  }

  setUserUid(value) {
    this.user.uid = value;

    this.saveLocalStorage();
  }

  setUserName(value) {
    this.user.name = value;

    this.saveLocalStorage();
  }

  setUserUsername(value) {
    this.user.username = value;

    this.saveLocalStorage();
  }


  setUserEmail(value) {
    this.user.email = value;

    this.saveLocalStorage();
  }

  setUserTelefone(value) {
    this.user.telefone = value;

    this.saveLocalStorage();
  }

  setUserWallet(value) {
    this.user.carteira = value;

    this.saveLocalStorage();
  }

  saveLocalStorage(){
      localStorage.setItem(this.user_key_name, JSON.stringify(this.user));
  }
}