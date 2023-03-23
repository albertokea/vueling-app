import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login/login.service";

@Component({
  selector: "app-main-toolbar",
  templateUrl: "./main-toolbar.component.html",
  styleUrls: ["./main-toolbar.component.scss"],
})
export class MainToolbarComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit() {
    this.loginService.showLogOutIcon =
      localStorage.getItem("accessKey") &&
      localStorage.getItem("accessKey") !== ""
        ? true
        : false;
  }

  public logOut() {
    this.loginService.logOut();
  }

  public get showLogOutIcon() {
    return this.loginService.showLogOutIcon;
  }
}
