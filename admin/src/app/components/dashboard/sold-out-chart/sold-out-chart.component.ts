import { Component } from '@angular/core';
import { soldOutChart } from '../../../shared/data/charts/dashboard-chart';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sold-out-chart',
  standalone: true,
  imports: [FeatherIconsComponent,NgApexchartsModule,RouterModule],
  templateUrl: './sold-out-chart.component.html',
  styleUrls: ['./sold-out-chart.component.scss']
})

export class SoldOutChartComponent {

  public soldOutChart = soldOutChart;

}
