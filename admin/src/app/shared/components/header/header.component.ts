import { Component } from '@angular/core';
import { SearchComponent } from './widgets/search/search.component';
import { FullScreenComponent } from './widgets/full-screen/full-screen.component';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { AttachmentsComponent } from './widgets/attachments/attachments.component';
import { NotificationComponent } from './widgets/notification/notification.component';
import { MessageComponent } from './widgets/message/message.component';
import { UserProfileComponent } from './widgets/user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent,FullScreenComponent,FeatherIconsComponent,
    AttachmentsComponent,NotificationComponent,MessageComponent,UserProfileComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
