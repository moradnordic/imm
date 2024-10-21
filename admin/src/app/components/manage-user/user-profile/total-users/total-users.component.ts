import { Component, Input } from '@angular/core';
import { totalUserChart } from '../../../../shared/data/charts/manage-user-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-total-users',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss']
})
export class TotalUsersComponent {

  @Input() title: string;
  @Input() chartData: any;

  public totalUserChart = totalUserChart;

}
