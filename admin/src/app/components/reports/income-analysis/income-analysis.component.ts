import { Component } from '@angular/core';
import { incomeAnalysisChart } from '../../../shared/data/charts/reports-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-income-analysis',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './income-analysis.component.html',
  styleUrls: ['./income-analysis.component.scss']
})

export class IncomeAnalysisComponent {

  public incomeAnalysis = incomeAnalysisChart;

}
