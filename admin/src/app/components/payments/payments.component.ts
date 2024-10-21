import { Component } from '@angular/core';
import { paymentData } from '../../shared/data/data/payment/payment';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})

export class PaymentsComponent {

  public paymentData = paymentData;

}
