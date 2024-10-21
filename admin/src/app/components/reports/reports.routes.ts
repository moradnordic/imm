import { Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

export default[
  {
    path: '',
    component: ReportsComponent,
    data: {
      title: 'Reports',
      breadcrumb: 'Reports'
    }
  }
] as Routes;

