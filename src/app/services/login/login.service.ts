import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _showLogOutIcon = false;

constructor(private router: Router) { }

public logIn() {
  localStorage.setItem('accessKey', 'theAccessKeyToken');
  this.router.navigate(['airportsList']);
  this.showLogOutIcon = true;
}

public logOut() {
  localStorage.removeItem('accessKey');
  this.showLogOutIcon = false;
  this.router.navigate(['login']);
}

public get showLogOutIcon() {
 return this._showLogOutIcon;
}

public set showLogOutIcon(showIcon: boolean) {
  this._showLogOutIcon = showIcon;
 }

}
