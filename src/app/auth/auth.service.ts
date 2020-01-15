import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private AfFire: AngularFirestore,
    private AfAuth: AngularFireAuth
  ) {}

  public register(email, password) {
    return this.AfAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.AfAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
