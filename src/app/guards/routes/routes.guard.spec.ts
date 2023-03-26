import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AirportsListComponent } from 'src/app/airports-list/airports-list.component';

import { RoutesGuard } from './routes.guard';

describe('RoutesGuard', () => {
  let guard: RoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterTestingModule.withRoutes([{ path: 'airportsList', component: AirportsListComponent }])]
    });
    guard = TestBed.inject(RoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
