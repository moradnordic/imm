import { Component, Input } from '@angular/core';
import { followingData } from '../../../../shared/data/data/manage-user/manage-user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-following',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent {

  @Input() totalData: number;

  public followingData = followingData;

}
