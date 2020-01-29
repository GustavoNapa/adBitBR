import { UsuarioService } from './../shared/usuario.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    private toastController: ToastController,
    private AfAuth: AngularFireAuth,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  public async onSubmit(){
    this.presentLoading();

    await this.AfAuth.auth
      .signInWithEmailAndPassword(this.loginForm.value.login, this.loginForm.value.password)
      .then(function (user) {
        localStorage.setItem('uid', user.user.uid);
        localStorage.setItem('email', user.user.email);
      }).catch (function (error) {
        console.log('Error getting documents', error);
    });

    if (localStorage.getItem("uid") != '') {
      const toast = await this.toastController.create({
          message: 'Logado com Sucesso',
          duration: 5000
        });
        toast.present();

      this.navCtrl.navigateForward("/tabs/inicio");
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Fazendo login',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
}
