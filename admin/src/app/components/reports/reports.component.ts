import { Component } from '@angular/core';
import { ReportsData } from '../../shared/data/data/reports/reports';
import { SalesSummaryComponent } from '../dashboard/sales-summary/sales-summary.component';
import { DashboardManagementReportsComponent } from '../dashboard/dashboard-management-reports/dashboard-management-reports.component';
import { RevenueChartComponent } from './revenue-chart/revenue-chart.component';
import { PropertySalesComponent } from './property-sales/property-sales.component';
import { IncomeAnalysisComponent } from './income-analysis/income-analysis.component';
import { VisitorLocationComponent } from './visitor-location/visitor-location.component';
import { RecentTranscationComponent } from './recent-transcation/recent-transcation.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [SalesSummaryComponent,DashboardManagementReportsComponent,RevenueChartComponent,
    PropertySalesComponent,IncomeAnalysisComponent,VisitorLocationComponent,RecentTranscationComponent
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  public reportsData = ReportsData;

}
