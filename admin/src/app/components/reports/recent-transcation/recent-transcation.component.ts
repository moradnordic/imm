import { Component } from '@angular/core';
import { recentTranscation } from '../../../shared/data/data/reports/reports';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-transcation',
  standalone: true,
  imports: [FeatherIconsComponent,CommonModule],
  templateUrl: './recent-transcation.component.html',
  styleUrls: ['./recent-transcation.component.scss']
})

export class RecentTranscationComponent {

  public recentTranscation = recentTranscation;

}
