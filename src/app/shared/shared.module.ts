import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "../components/error/error.component";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ErrorComponent,
    MatCardModule
  ]
})
export class SharedModule {}