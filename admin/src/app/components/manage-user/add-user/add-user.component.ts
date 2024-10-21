import { Component } from '@angular/core';
import { UserPersonalDetailsComponent } from '../widgets/user-personal-details/user-personal-details.component';
import { UserLoginDetailsComponent } from '../widgets/user-login-details/user-login-details.component';
import { UserMediaComponent } from '../widgets/user-media/user-media.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [UserPersonalDetailsComponent,UserLoginDetailsComponent,UserMediaComponent],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  public genderValue = 'Male';

}
