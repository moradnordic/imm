import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../feather-icons/feather-icons.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterModule,FeatherIconsComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

}
