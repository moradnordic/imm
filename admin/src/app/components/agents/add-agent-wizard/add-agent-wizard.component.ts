import { Component } from '@angular/core';
import { stepsData } from '../../../shared/data/data/manage-user/manage-user';
import { UserWizardStepsComponent } from '../../manage-user/widgets/user-wizard-steps/user-wizard-steps.component';
import { AddUserWizardComponent } from '../../manage-user/add-user-wizard/add-user-wizard.component';
import { UserPersonalDetailsComponent } from '../../manage-user/widgets/user-personal-details/user-personal-details.component';
import { UserLoginDetailsComponent } from '../../manage-user/widgets/user-login-details/user-login-details.component';
import { UserMediaComponent } from '../../manage-user/widgets/user-media/user-media.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-agent-wizard',
  standalone: true,
  imports:[UserWizardStepsComponent,UserPersonalDetailsComponent,UserLoginDetailsComponent,
    UserMediaComponent,CommonModule
  ],
  templateUrl: './add-agent-wizard.component.html',
  styleUrls: ['./add-agent-wizard.component.scss']
})
export class AddAgentWizardComponent {

  public stepsData = stepsData;
  public activeSteps: number;

  ngOnInit() {
    const data = stepsData.filter((data) => {
      return data.stepNumber === 1 ;
    });
    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
