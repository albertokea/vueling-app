/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AirportDetailComponent } from './airport-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AirportsListService } from 'src/app/services/airports-list/airports-list.service';


describe('AirportDetailComponent', () => {
  let component: AirportDetailComponent;
  let fixture: ComponentFixture<AirportDetailComponent>;
  let airportsService: AirportsListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportDetailComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDetailComponent);
    component = fixture.componentInstance;
    airportsService = TestBed.inject(AirportsListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
