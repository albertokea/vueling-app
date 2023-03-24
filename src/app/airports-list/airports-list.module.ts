import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AirportsListComponent } from "./airports-list.component";
import { AirportCardComponent } from "./airport-card/airport-card.component";
import { MatCardModule } from "@angular/material/card";
import { AirportsListRoutingModule } from "./airports-list.routing.module";
import { AirportDetailComponent } from "./airport-detail/airport-detail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AirportsListComponent, AirportCardComponent, AirportDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    AirportsListRoutingModule
  ],
})
export class AirportsListModule {}
