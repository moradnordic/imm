import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../widgets/common-login-form/common-login-form.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonLoginFormComponent],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent {

}
