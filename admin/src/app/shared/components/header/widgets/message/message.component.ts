import { Component } from '@angular/core';
import { messageData } from '../../../../../shared/data/data/header/headet';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  public messageData = messageData;

}
