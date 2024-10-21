import { Component } from '@angular/core';
import { dashboardProperty } from '../../../shared/data/data/dashboard/dashboard';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-my-property',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard-my-property.component.html',
  styleUrls: ['./dashboard-my-property.component.scss']
})
export class DashboardMyPropertyComponent {

  public dashboardProperty = dashboardProperty;

}
