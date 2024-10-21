import { Component } from '@angular/core';
import { friends } from '../../../../shared/data/data/manage-user/manage-user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {

  public friends = friends;

}
