import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { latestForRent } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { PropertyService } from '../../../../../shared/services/property.service';
import { addCompareItem } from '../../../../../shared/store/actions/compare.action';
import { addWishlistItem } from '../../../../store/actions/wishlist.action';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-box-two',
  standalone: true,
  imports:[ImageSliderComponent,FeatherIconsComponent,CurrencySymbolPipe,CommonModule],
  templateUrl: './property-box-two.component.html',
  styleUrls: ['./property-box-two.component.scss'],
})

export class PropertyBoxTwoComponent implements OnInit {
  properties: any[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.getProperties().subscribe(
      (data) => {
        this.properties = data; // Stocke les propriétés récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des propriétés', error);
      }
    );
  }
}
