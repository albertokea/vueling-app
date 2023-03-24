import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class LoginModule {}
