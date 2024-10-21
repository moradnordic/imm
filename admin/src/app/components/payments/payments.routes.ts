import { Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';

export default [
  {
    path: '',
    component: PaymentsComponent,
    data: {
      title: "Payments",
      breadcrumb: "Payments"
    }
  }
] as Routes;

