import { Component } from '@angular/core';
import { UserPersonalDetailsComponent } from '../../manage-user/widgets/user-personal-details/user-personal-details.component';
import { UserLoginDetailsComponent } from '../../manage-user/widgets/user-login-details/user-login-details.component';
import { UserMediaComponent } from '../../manage-user/widgets/user-media/user-media.component';

@Component({
  selector: 'app-edit-agent',
  standalone: true,
  imports: [UserPersonalDetailsComponent,UserLoginDetailsComponent,UserMediaComponent],
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.scss']
})
export class EditAgentComponent {

}
