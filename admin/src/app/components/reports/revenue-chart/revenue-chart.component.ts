import { Component } from '@angular/core';
import { revenueChart } from '../../../shared/data/charts/reports-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.scss']
})
export class RevenueChartComponent {

  public revenueChartData = revenueChart;

}
