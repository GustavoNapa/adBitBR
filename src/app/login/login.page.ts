import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public submit_disable = false;

  constructor() {}

  ngOnInit() {}

  public fazerLogin() {
    alert("submetido");
  }
}
