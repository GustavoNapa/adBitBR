import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDataService {

  private usuarioSource = new BehaviorSubject({ usuario: null, key: '' });
  currentUsuario = this.usuarioSource.asObservable();

  constructor() { }

  changeUsuario(usuario: Usuario, key: string) {
    this.usuarioSource.next({ usuario: usuario, key: key });
  }
}
