import { Component, Input } from '@angular/core';
import { steps } from '../../../../shared/interface/interface';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-user-wizard-steps',
  standalone: true,
  imports: [CommonModule,FeatherIconsComponent],
  templateUrl: './user-wizard-steps.component.html',
  styleUrls: ['./user-wizard-steps.component.scss']
})
export class UserWizardStepsComponent {

  @Input() stepsData: steps[];
  @Input() activeSteps: number;

  ngOnChanges() {
    this.stepsData.forEach((data) => {
      if (data.stepNumber < this.activeSteps) {
        data.disabled = true;
      } else {
        data.disabled = false
      }
    })
  }
}
