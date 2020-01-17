import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ToastService } from '../toast/toast.service';

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
    public toastController: ToastService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  public onSubmit() {
    this.FBAuth.login(
      this.loginForm.value.login,
      this.loginForm.value.password
    )
  }

  public onRegister() {
    this.FBAuth.register(
      this.loginForm.value.login,
      this.loginForm.value.password
    );
  }
}
