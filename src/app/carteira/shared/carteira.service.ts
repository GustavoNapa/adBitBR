import { Carteira } from './carteira';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private db: AngularFireDatabase) { }

  //Inserir dados a carteira
  inserir(carteira: Carteira){
    this.db.list('carteira').push(carteira)
    .then((result: any) => {
      console.log(result.key);
    });
  }

  //atualizar dados da carteira
  atualizar(carteira: Carteira, key: string){
    this.db.list('carteira').update(key, carteira)
      .catch((error: any) =>{
        console.error(error);
      });
  }

  //Lista todas as carteiras
  listarTodas(){
    return this.db.list('carteira')
      .snapshotChanges()
        .pipe(
          map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          })
        );
  }

//   getAll() {
//     return this.db.list('contato')
//       .snapshotChanges()
//       .pipe(
//         map(changes => {
//           return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
//         })
//       );
//   }

  delete(key: string) {
    this.db.object('carteira/${key}').remove();
  }
}

