import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  @Input() registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController
  ) {}

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
}
