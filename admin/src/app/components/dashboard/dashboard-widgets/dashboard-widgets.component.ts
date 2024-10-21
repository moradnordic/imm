import { Component, Input } from '@angular/core';
import { dashboardWidgets } from '../../../shared/interface/interface';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-dashboard-widgets',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './dashboard-widgets.component.html',
  styleUrls: ['./dashboard-widgets.component.scss']
})
export class DashboardWidgetsComponent {

  @Input() data: dashboardWidgets;

}
