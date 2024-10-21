import { Component } from '@angular/core';
import { assignessData } from '../../../shared/data/data/dashboard/dashboard';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-assigness',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './assigness.component.html',
  styleUrls: ['./assigness.component.scss']
})
export class AssignessComponent {

  public assignessData = assignessData;
}
