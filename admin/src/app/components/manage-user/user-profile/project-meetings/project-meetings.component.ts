import { Component } from '@angular/core';
import { projectMeetings } from '../../../../shared/data/data/manage-user/manage-user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-meetings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-meetings.component.html',
  styleUrls: ['./project-meetings.component.scss']
})

export class ProjectMeetingsComponent {

  public projectMeetings = projectMeetings;

}
