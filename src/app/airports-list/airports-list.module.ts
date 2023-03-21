import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AirportsListComponent } from "./airports-list.component";
import { AirportCardComponent } from "./airport-card/airport-card.component";import { MatCardModule } from "@angular/material/card";import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AirportsListRoutingModule } from "./airports-list.routing.module";

@NgModule({
  declarations: [AirportsListComponent, AirportCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AirportsListRoutingModule
  ],
})
export class AirportsListModule {}
