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

  getUser() {
    return localStorage.getItem(this.user_key_name);
  }

  setUserUid(value) {
    this.user.uid = value;
  }

  setUserName(value) {
    this.user.name = value;
  }

  setUserUsername(value) {
    this.user.username = value;
  }


  setUserEmail(value) {
    this.user.email = value;
  }

  setUserTelefone(value) {
    this.user.telefone = value;
  }

  setUserWallet(value) {
    this.user.carteira = value;
  }

  saveLocalStorage(){
      localStorage.setItem(this.user_key_name, JSON.stringify(this.user));
  }
}