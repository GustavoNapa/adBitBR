import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  @Input() loginForm: FormGroup;

  constructor(private fb: FormBuilder, private FBAuth: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  public onSubmit() {
    const user = this.FBAuth.login(this.loginForm.value.login, this.loginForm.value.password);
    alert("logado: "+user);
  }
}
