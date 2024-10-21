import { Component } from '@angular/core';
import { notificationData } from '../../../../../shared/data/data/header/headet';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  public notificationData = notificationData;

}
