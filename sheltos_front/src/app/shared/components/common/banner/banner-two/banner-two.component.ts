import { Component, Input } from '@angular/core';
import { banner } from '../../../../../shared/interface/property';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './banner-two.component.html',
  styleUrls: ['./banner-two.component.scss']
})

export class BannerTwoComponent {

  @Input() bannerData: banner;
  @Input() tagClass: string;

}
