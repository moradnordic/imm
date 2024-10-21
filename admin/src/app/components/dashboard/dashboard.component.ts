import { Component } from '@angular/core';
import { managementReportsData, widgetsData } from '../../shared/data/data/dashboard/dashboard';
import { AssignessComponent } from './assigness/assigness.component';
import { DashboardManagementReportsComponent } from './dashboard-management-reports/dashboard-management-reports.component';
import { DashboardMyPropertyComponent } from './dashboard-my-property/dashboard-my-property.component';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { PaymentReceiveLastMonthComponent } from './payment-receive-last-month/payment-receive-last-month.component';
import { ProjectTimelineComponent } from './project-timeline/project-timeline.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { SoldOutChartComponent } from './sold-out-chart/sold-out-chart.component';
import { TotalPropertyComponent } from './total-property/total-property.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:[AssignessComponent,DashboardManagementReportsComponent,
    DashboardMyPropertyComponent,DashboardWidgetsComponent,PaymentReceiveLastMonthComponent,
    ProjectTimelineComponent,SalesSummaryComponent,SoldOutChartComponent,TotalPropertyComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public widgetsData = widgetsData;
  public managementReportsData = managementReportsData;

}
