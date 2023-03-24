import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AirportsOfTheWorld';

  constructor(private loginService: LoginService) {}

  get wrapContent() {
    return this.loginService.isLogged;
  }
}
