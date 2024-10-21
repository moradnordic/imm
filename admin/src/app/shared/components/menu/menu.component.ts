import { Component } from '@angular/core';
import { Menu, NavService } from '../../services/nav.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { LogoComponent } from './widgets/logo/logo.component';
import { ProfileComponent } from './widgets/profile/profile.component';
import { HelpComponent } from './widgets/help/help.component';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports:[LogoComponent,ProfileComponent,HelpComponent,
    FeatherIconsComponent,CommonModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menus = this.navService.MENUITEM;
  constructor(private navService: NavService,private router: Router, public layout: LayoutService) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.menus.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            items.children?.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
            });
          });
        }
      });


  }

  toggleMenu(item:Menu){
    if(!item.active){
      this.menus.forEach((child) => {
        if(this.menus.includes(item)){
          child.active = false
        }
        if(child.children){
          child.children.forEach((subChild) => {
            if(child.children?.includes(item)){
              subChild.active = false;
            }
          })
          return;
        }
      })
    }
    item.active = !item.active;
  }

  // Active Nave state
  setNavActive(item:Menu) {
    this.menus.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems === item) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }
}
