import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { BrMaskerModule, BrMaskDirective } from 'br-mask';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  @Input() registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private FBAuth: AuthService,
    public brMask: BrMaskDirective
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

  public onSubmit(){
    this.FBAuth.register(
      this.registerForm.value.email,
      this.registerForm.value.name,
      this.registerForm.value.password,
      this.registerForm.value.telefone,
      this.registerForm.value.carteira
    );
  }
}
