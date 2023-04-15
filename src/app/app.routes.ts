import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pelicula-list',
    loadComponent: () => import('./pelicula-list/pelicula-list.page').then( m => m.PeliculaListPage)
  },
  {
    path: 'profile/:id',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'buscar',
    loadComponent: () => import('./buscar/buscar.page').then( m => m.BuscarPage)
  },
];
