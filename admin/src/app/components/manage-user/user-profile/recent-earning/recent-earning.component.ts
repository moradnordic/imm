import { Component } from '@angular/core';
import { earningChart } from '../../../../shared/data/charts/manage-user-chart';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-recent-earning',
  standalone: true,
  imports: [ChartistModule],
  templateUrl: './recent-earning.component.html',
  styleUrls: ['./recent-earning.component.scss']
})
export class RecentEarningComponent {

  public earningChart = earningChart;

}
