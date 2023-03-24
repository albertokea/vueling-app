import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportDetailComponent } from './airport-detail/airport-detail.component';
import { AirportsListComponent } from './airports-list.component';

const routes: Routes = [
  {
    path: '',
    component: AirportsListComponent
  },
  {
    path: 'detail/:airportKey',
    component: AirportDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportsListRoutingModule { }