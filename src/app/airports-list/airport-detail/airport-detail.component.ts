import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AirportsListService } from "src/app/services/airports-list/airports-list.service";
import { AirportDetail } from "../airport";

@Component({
  selector: "app-airport-detail",
  templateUrl: "./airport-detail.component.html",
  styleUrls: ["./airport-detail.component.scss"],
})
export class AirportDetailComponent implements OnInit {
  public airport?: AirportDetail;
  public error?: string;

  constructor(
    private airportsListService: AirportsListService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      this.airportsListService
        .getAirport(params.airportKey)
        .then((airportData: AirportDetail) => {
          this.airport = airportData;
        })
        .catch((error) => {
          this.error = error.message;
        });
    });
  }
}
