import { Component } from '@angular/core';
import { totalUserChart } from '../../../shared/data/charts/manage-user-chart';
import { AboutUserComponent } from './about-user/about-user.component';
import { FollowingComponent } from './following/following.component';
import { FriendsComponent } from './friends/friends.component';
import { MonthlyInstallmentComponent } from './monthly-installment/monthly-installment.component';
import { ProjectMeetingsComponent } from './project-meetings/project-meetings.component';
import { RecentEarningComponent } from './recent-earning/recent-earning.component';
import { RecentPropertyComponent } from './recent-property/recent-property.component';
import { TotalUsersComponent } from './total-users/total-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports:[AboutUserComponent,FollowingComponent,FriendsComponent,
    MonthlyInstallmentComponent,ProjectMeetingsComponent,RecentEarningComponent,
    RecentPropertyComponent,TotalUsersComponent,UserDetailsComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  public userChart = totalUserChart;

}
