import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  exports: [
    SpinnerComponent,
    MatCardModule,
    TranslateModule
  ]
})
export class SharedModule {}