import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesGuard } from './guards/routes.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'airportsList',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'airportsList',
    loadChildren: () => import('./airports-list/airports-list.module').then((m) => m.AirportsListModule),
    canActivate: [RoutesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
