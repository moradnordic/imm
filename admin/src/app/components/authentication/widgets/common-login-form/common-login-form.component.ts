import { Component, Input } from '@angular/core';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-common-login-form',
  standalone: true,
  imports:[FeatherIconsComponent,CommonModule,RouterModule],
  templateUrl: './common-login-form.component.html',
  styleUrls: ['./common-login-form.component.scss']
})
export class CommonLoginFormComponent {

  @Input() type: string;
  public isShow: boolean = false;
  public inputType: string = 'password';

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
