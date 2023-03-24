import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private _isLogged = false;
  private _user = "";

  constructor(private router: Router) {}

  public logIn(user: string) {
    localStorage.setItem("accessKey", "theAccessKeyToken");
    localStorage.setItem("user", user);
    this.isLogged = true;
    this.user = user;

    this.router.navigate(["airportsList"]);
  }

  public logOut() {
    localStorage.removeItem("accessKey");
    localStorage.removeItem("user");
    this.isLogged = false;
    this.user = '';
    
    this.router.navigate(["login"]);
  }

  public get isLogged() {
    return this._isLogged;
  }

  public set isLogged(isLogged: boolean) {
    this._isLogged = isLogged;
  }

  public get user() {
    return this._user;
  }

  public set user(showIcon: string) {
    this._user = showIcon;
  }
}
