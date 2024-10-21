import { Component } from '@angular/core';
import { LayoutService } from '../../../../../shared/services/layout.service';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../feather-icons/feather-icons.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports:[RouterModule,FeatherIconsComponent],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {


  constructor(public layout: LayoutService){}

  sidebarToggle(){
    this.layout.sidebarOpen =! this.layout.sidebarOpen
  }
}
