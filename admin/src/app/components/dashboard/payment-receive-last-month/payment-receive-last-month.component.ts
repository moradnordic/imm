import { Component } from '@angular/core';
import { lastMonthData } from '../../../shared/data/data/dashboard/dashboard';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-receive-last-month',
  standalone: true,
  imports: [FeatherIconsComponent,RouterModule],
  templateUrl: './payment-receive-last-month.component.html',
  styleUrls: ['./payment-receive-last-month.component.scss']
})
export class PaymentReceiveLastMonthComponent {

  public lastMonthData =lastMonthData;

}
