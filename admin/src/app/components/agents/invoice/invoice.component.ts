import { Component } from '@angular/core';
import { invoiceData } from '../../../shared/data/data/agent/agent';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [NgxPrintModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  public invoiceData = invoiceData;

}
