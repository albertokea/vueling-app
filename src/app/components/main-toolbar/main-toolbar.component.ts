import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login/login.service";

@Component({
  selector: "app-main-toolbar",
  templateUrl: "./main-toolbar.component.html",
  styleUrls: ["./main-toolbar.component.scss"],
})
export class MainToolbarComponent implements OnInit {
  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginService.isLogged =
      localStorage.getItem("accessKey") &&
      localStorage.getItem("accessKey") !== ""
        ? true
        : false;
    this.loginService.user = localStorage.getItem("user") || "";
  }

  public goToAirportsList() {
    if (this.isLogged) {
      this.router.navigate(["airportsList"]);
    }
  }

  public logOut() {
    this.loginService.logOut();
  }

  public get isLogged() {
    return this.loginService.isLogged;
  }

  public get user() {
    return this.loginService.user;
  }
}
