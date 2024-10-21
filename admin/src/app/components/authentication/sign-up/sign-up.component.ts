import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../widgets/common-login-form/common-login-form.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports:[CommonLoginFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

}
