import { Component } from '@angular/core';
import { totalProperty } from '../../../shared/data/data/dashboard/dashboard';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-total-property',
  standalone: true,
  imports: [FeatherIconsComponent,RouterModule],
  templateUrl: './total-property.component.html',
  styleUrls: ['./total-property.component.scss']
})
export class TotalPropertyComponent {

  public totalProperty = totalProperty;

}
