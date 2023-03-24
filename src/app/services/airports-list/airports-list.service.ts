import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Airport, AirportDetail} from '../../airports-list/airport';

@Injectable({providedIn: 'root'})
export class AirportsListService {

    constructor(private http: HttpClient) {
    }

    public getAllAirports(): Promise<Airport[]> {
        const url = 'http://localhost:1500/allAirports';
        return this.http.get<Airport[]>(url).toPromise();
    }

    public getAirport(airportKey: string): Promise<AirportDetail> {
        const url = 'http://localhost:1500/airport';
        return this.http.post<AirportDetail>(url, {key: airportKey}).toPromise();
    }

}
