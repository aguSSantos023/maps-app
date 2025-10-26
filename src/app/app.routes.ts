import { Routes } from '@angular/router';
import { FullscreenMapP } from './pages/fullscreen-map-p/fullscreen-map-p';
import { MarkersP } from './pages/markers-p/markers-p';
import { HousesP } from './pages/houses-p/houses-p';

export const routes: Routes = [

  {
    path: 'fullscreen',
    component: FullscreenMapP,
    title: 'Pantalla Completa'
  },
  {
    path: 'markers',
    component: MarkersP,
    title: 'Marcadores'
  },
  {
    path: 'houses',
    component: HousesP,
    title: 'Propiedades Disponibles'
  },
  {
    path: '**',
    redirectTo: 'fullscreen',
  },
];
