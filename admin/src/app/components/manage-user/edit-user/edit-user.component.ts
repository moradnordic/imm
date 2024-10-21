import { Component } from '@angular/core';
import { UserPersonalDetailsComponent } from '../widgets/user-personal-details/user-personal-details.component';
import { UserLoginDetailsComponent } from '../widgets/user-login-details/user-login-details.component';
import { UserMediaComponent } from '../widgets/user-media/user-media.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [UserPersonalDetailsComponent,UserLoginDetailsComponent,UserMediaComponent],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

}
