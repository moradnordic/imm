import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutService } from '../../../../shared/services/layout.service';
import { FeatherIconsComponent } from '../../feather-icons/feather-icons.component';
import { HeaderComponent } from '../../header/header.component';
import { MenuComponent } from '../../menu/menu.component';
import { BreadcrumbComponent } from '../../ui/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { CustomizerComponent } from '../../customizer/customizer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FeatherIconsComponent,HeaderComponent,MenuComponent,
    BreadcrumbComponent,FooterComponent,BreadcrumbComponent,
    RouterModule,CommonModule,CustomizerComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public containerClass: string = '';

  constructor(public layout: LayoutService, public router: Router){
    if(window.innerWidth < 992){
      this.layout.sidebarOpen = true;
    }
    if(window.location.pathname == '/manage-user/add-user-wizard'){
      this.containerClass = 'property-wizard horizontal-wizard'
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
    let number = event.target.innerWidth;
    if(number < 992){
      this.layout.sidebarOpen = true;
    }else{
      this.layout.sidebarOpen = false
    }
  }

  sidebarToggle(){
    this.layout.sidebarOpen =! this.layout.sidebarOpen
  }


}
