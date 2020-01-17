import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private AfAuth: AngularFireAuth, public navCtrl: NavController) {}

  public register(email, password) {
    this.AfAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(function(event) {
        localStorage.setItem("userUid", event.user.uid);
        alert("Registrado");
        this.navCtrl.navigateForward("tabs/inicio");
      })
      .catch(function(error) {
        alert("Error: " + error.code);
      });
  }

  login(email, password) {
    this.AfAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(function(event) {
        localStorage.setItem("userUid", event.user.uid);
        this.navCtrl.navigateForward("tabs/inicio");
      })
      .catch(function(error) {
        return error.code;
      });
  }

  getLogin() {
    return this.AfAuth.auth.currentUser;
  }
}
