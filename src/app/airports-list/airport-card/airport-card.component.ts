import { Component, Input } from "@angular/core";
import { Airport } from "../airport";

@Component({
  selector: "app-airport-card",
  templateUrl: "./airport-card.component.html",
  styleUrls: ["./airport-card.component.scss"],
})
export class AirportCardComponent {
  @Input() airport: Airport;

  constructor() {
    this.airport = {
      key: "",
      name: "",
      country: "",
      city: "",
    };
  }
}
