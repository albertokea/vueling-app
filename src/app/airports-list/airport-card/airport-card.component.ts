import { Component, Input } from "@angular/core";
import { Airport } from "../airport";
import { AirportsListService } from "../airports-list.service";

@Component({
  selector: "app-airport-card",
  templateUrl: "./airport-card.component.html",
  styleUrls: ["./airport-card.component.scss"],
})
export class AirportCardComponent {
  @Input() airport: Airport;

  constructor(private airportsListService: AirportsListService) {
    this.airport = {
      key: "",
      name: "",
      country: "",
      city: "",
    };
  }

  public async clickAirport(key: string): Promise<void> {
    const airport = await this.airportsListService.getAirport(key);
    console.log(airport);
}
}
