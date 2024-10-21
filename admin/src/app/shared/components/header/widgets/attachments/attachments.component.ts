import { Component } from '@angular/core';
import { attachmentData } from '../../../../../shared/data/data/header/headet';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent {

  public attachmentData = attachmentData;

}
