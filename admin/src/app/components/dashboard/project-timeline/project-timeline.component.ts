import { Component } from '@angular/core';
import { timelineChart } from '../../../shared/data/charts/dashboard-chart';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-project-timeline',
  standalone: true,
  imports: [RouterModule,NgApexchartsModule],
  templateUrl: './project-timeline.component.html',
  styleUrls: ['./project-timeline.component.scss']
})

export class ProjectTimelineComponent {

  public timelineChart = timelineChart;

}
