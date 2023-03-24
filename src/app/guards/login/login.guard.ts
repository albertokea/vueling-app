import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const guardResult =
      localStorage.getItem("accessKey") &&
      localStorage.getItem("accessKey") !== ""
        ? false
        : true;
    if (!guardResult) {
      this.router.navigate(["airportsList"]);
    }
    return guardResult;
  }
  
}
