import { UsuarioDataService } from './../shared/usuario-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from '../shared/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
    public perfil = {
      uid: localStorage.getItem('uid'),
      nome: localStorage.getItem('name'),
      nivel: "Madeira",
      balanco: 1525,
      qtde_cliques: 500,
      qtde_tempo: 17504,
      qtde_afiliados: 3,
      qtde_afiliados_ind: 5,
      valor_afiliados: 500,
      saque: false,
      carteira: localStorage.getItem('carteira'),
      email: localStorage.getItem('email'),
      telefone: localStorage.getItem('telefone'),
      linkAfiliado: 'https://bitly.com/'
    };

  public usuarios: Observable<any>;

  constructor(private router: Router,
    private AfAuth: AngularFireAuth,
    private usuarioService: UsuarioService,
    private UsuarioDataService: UsuarioDataService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.listarTodas();
  }

  public signOut() {
    this.AfAuth.auth.signOut();

    localStorage.clear();

    this.router.navigateByUrl('/login');
  }

}
