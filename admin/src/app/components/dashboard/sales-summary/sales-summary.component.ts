import { Component } from '@angular/core';
import { salesSummaryChart } from '../../../shared/data/charts/dashboard-chart';
import { ChartLegendsComponent } from './chart-legends/chart-legends.component';
import { SalesStatusComponent } from './sales-status/sales-status.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-sales-summary',
  standalone: true,
  imports: [ChartLegendsComponent,SalesStatusComponent,NgApexchartsModule],
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.scss']
})
export class SalesSummaryComponent {

  public salesSummaryChart = salesSummaryChart;
}
