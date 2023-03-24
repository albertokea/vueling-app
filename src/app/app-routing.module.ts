import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login/login.guard';
import { RoutesGuard } from './guards/routes/routes.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'airportsList',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
    canActivate: [LoginGuard]
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
