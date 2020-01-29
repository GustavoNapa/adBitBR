import { Carteira } from './carteira';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteiraDataService {
  // private contatoSource = new BehaviorSubject({ contato: null, key: '' });
  // currentContato = this.contatoSource.asObservable();

  private carteiraSource = new BehaviorSubject({ carteira: null, key: '' });
  currentCarteira = this.carteiraSource.asObservable();

  constructor() { }

  // changeContato(contato: Contato, key: string) {
  //   this.contatoSource.next({ contato: contato, key: key });
  // }

  changeCarteira(carteira: Carteira, key: string){
    this.carteiraSource.next({ carteira: carteira, key: key});
  }
}
