import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  @Input() loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private FBAuth: AuthService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  async onSubmit() {
    this.presentLoading();
    
    if(await this.FBAuth.login(this.loginForm.value.login, this.loginForm.value.password)){
      const toast = await this.toastController.create({
        message: 'Logado com Sucesso',
        duration: 2000
      });
      toast.present();

      this.navCtrl.navigateForward("/tabs/inicio");
    }else{

    }
  }

  public getUser(){
    alert("UId: "+this.FBAuth.getLogin().uid);
  }

  public signOut(){
    this.FBAuth.signOut();
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
