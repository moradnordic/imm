import { Component } from '@angular/core';
import { totalAgentChart } from '../../../shared/data/charts/agents-chart';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { FollowingComponent } from '../../manage-user/user-profile/following/following.component';
import { AboutUserComponent } from '../../manage-user/user-profile/about-user/about-user.component';
import { ProjectMeetingsComponent } from '../../manage-user/user-profile/project-meetings/project-meetings.component';
import { FriendsComponent } from '../../manage-user/user-profile/friends/friends.component';
import { RecentPropertyComponent } from '../../manage-user/user-profile/recent-property/recent-property.component';
import { RecentEarningComponent } from '../../manage-user/user-profile/recent-earning/recent-earning.component';
import { TotalUsersComponent } from '../../manage-user/user-profile/total-users/total-users.component';
import { MonthlyInstallmentComponent } from '../../manage-user/user-profile/monthly-installment/monthly-installment.component';

@Component({
  selector: 'app-agent-profile',
  standalone: true,
  imports: [AgentDetailsComponent,FollowingComponent,AboutUserComponent,
    ProjectMeetingsComponent,FriendsComponent,RecentPropertyComponent,
  RecentEarningComponent,TotalUsersComponent,MonthlyInstallmentComponent],
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent {

  public agentChart = totalAgentChart;

}
