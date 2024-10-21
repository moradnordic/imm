import { Component } from '@angular/core';
import { propertyDetails } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';
import { GridPanelComponent } from '../widgets/grid-panel/grid-panel.component';
import { CommonPropertyBoxComponent } from '../widgets/common-property-box/common-property-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports:[GridPanelComponent,CommonPropertyBoxComponent,CommonModule],
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

  public propertyData: propertyDetails[];

  constructor(private propertyService: PropertyService){
    this.propertyService.getProperty().subscribe(response => {
      this.propertyData = response;
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-default', '#ff5c41');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-default')
  }
}
