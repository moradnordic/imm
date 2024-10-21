import { Component } from '@angular/core';
import { stepsData } from '../../../shared/data/data/manage-user/manage-user';
import { UserWizardStepsComponent } from '../widgets/user-wizard-steps/user-wizard-steps.component';
import { UserPersonalDetailsComponent } from '../widgets/user-personal-details/user-personal-details.component';
import { UserLoginDetailsComponent } from '../widgets/user-login-details/user-login-details.component';
import { UserMediaComponent } from '../widgets/user-media/user-media.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user-wizard',
  standalone: true,
  imports: [UserWizardStepsComponent,UserPersonalDetailsComponent,
    UserLoginDetailsComponent,UserMediaComponent,CommonModule],
  templateUrl: './add-user-wizard.component.html',
  styleUrls: ['./add-user-wizard.component.scss']
})
export class AddUserWizardComponent {

  public stepsData = stepsData;
  public activeSteps: number;

  ngOnInit() {
    const data = stepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
