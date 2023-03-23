import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class LoginModule {}
