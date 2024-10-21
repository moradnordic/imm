import { Routes } from '@angular/router';
import { MapsComponent } from './maps.component';

export default [
  {
    path: '',
    component: MapsComponent,
    data: {
      title: 'Map',
      breadcrumb: "Map"
    }
  }
] as Routes;
