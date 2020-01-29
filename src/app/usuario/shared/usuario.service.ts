import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private db: AngularFireDatabase) { }

  //Inserir dados a usuario
  async inserir(usuario: Usuario) {
    await this.db
     .list('usuario')
      .push(usuario)
        .then((result: any) => {
          console.log(result.key);
          localStorage.setItem('key', result.key);

          return true;
        }).catch((error: any) => {
          console.error(error.code);

          return false;
        });
  }

  //atualizar dados da usuario
  atualizar(usuario: Usuario, key: string) {
    this.db.list('usuario').update(key, usuario)
      .catch((error: any) => {
        console.error(error);
      });
  }

  //Lista todas as usuarios
  listarTodas() {
    return this.db.list('usuario')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object('usuario/${key}').remove();
  }
}
