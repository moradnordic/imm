import { Component, Input } from '@angular/core';
import { reports } from '../../../shared/interface/interface';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-dashboard-management-reports',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './dashboard-management-reports.component.html',
  styleUrls: ['./dashboard-management-reports.component.scss']
})
export class DashboardManagementReportsComponent {

  @Input() reportsData: reports[];

}
