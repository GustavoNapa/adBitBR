import { UsuarioService } from './../shared/usuario.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from '../shared/usuario';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  @Input() registerForm: FormGroup;
  usuario: Usuario = new Usuario;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public navCtrl: NavController, 
    private AfAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ["", Validators.required],
      name: ["", Validators.required],
      password: ["", Validators.required],
      password2: ["", Validators.required],
      telefone: ["", Validators.required],
      carteira: ["", Validators.required]
    });
  }

  public async onSubmit() {
    let userID = '';

    await this.AfAuth.auth
      .createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
      .then(function (event) {
        userID = event.user.uid;

        localStorage.setItem('uid', userID);
      })
      .catch(function (error) {
        alert("Error: " + error.code);
      });
    
    if(localStorage.getItem("uid") != ''){
      this.usuario.uid = userID;
      this.usuario.email = this.registerForm.value.email;
      this.usuario.name = this.registerForm.value.name;
      this.usuario.telefone = this.registerForm.value.telefone;
      this.usuario.carteira.nome = this.registerForm.value.name;
      this.usuario.carteira.numeroCliques = 0;
      this.usuario.carteira.patente = "Madeira";
      this.usuario.carteira.satoshis = 0;
      this.usuario.carteira.tempoEmAnuncios = 0;

      if (this.usuarioService.inserir(this.usuario)) {
        this.navCtrl.navigateForward("/tabs/inicio");
      }
    }
  }
}
;

