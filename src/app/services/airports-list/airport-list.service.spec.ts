
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Airport } from 'src/app/airports-list/airport';
import { AirportsListService } from './airports-list.service'
import airport from '../../../../stubbs/data/aiport-bcn.json';
import airport2 from '../../../../stubbs/data/aiport-cdg.json';

describe('Service: AirportsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AirportsListService]
    });
  });

  it('should create the service', inject([AirportsListService], (service: AirportsListService) => {
    expect(service).toBeTruthy();
  }));

  it('should get airport detail data', inject([AirportsListService], (service: AirportsListService) => {
    const allAirports: Airport[] = [airport, airport2];
    spyOn(service, 'getAllAirports').and.returnValue(Promise.resolve(allAirports))
    service.getAllAirports().then((result)=> {
        expect(service.getAirport).toHaveBeenCalled()
        expect(result).toEqual(allAirports);
    })
  }));

  it('should get all airports data', inject([AirportsListService], (service: AirportsListService) => {
    spyOn(service, 'getAirport').and.returnValue(Promise.resolve(airport))
    service.getAirport('BCN').then((result)=> {
        expect(service.getAirport).toHaveBeenCalled()
        expect(result).toEqual(airport);
    })
  }));

});