import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private userCollection = this.AfFire.collection("users");

  constructor(private AfAuth: AngularFireAuth, private AfFire: AngularFirestore) {}

  async register(email, name, password, telefone, carteira) {
    let userID;
    await this.AfAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(function(event) {
        userID = event.user.uid;
      })
      .catch(function(error) {
        alert("Error: " + error.code);
      });

    await this.userCollection.doc(userID).set({
      uid: userID,
      name: name,
      email: email,
      telefone: telefone,
      wallet: carteira
        }).then(function (params) {
          alert("Registrado");
        }).catch(function (error) {
          alert('Error: ' + error.code);
    });
  }

  async login(email, password) {
    let status = false;
    await this.AfAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(function(user) {
        status = true
      })
      .catch(function (error) {
        status = false;
      });
    return status;
  }

  getLogin() {
    return this.AfAuth.auth.currentUser;
  }

  signOut(){
    this.AfAuth.auth.signOut();
    alert("Deslogado");
  }
}
