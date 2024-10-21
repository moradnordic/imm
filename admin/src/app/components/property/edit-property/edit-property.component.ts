import { Component } from '@angular/core';
import { AdditionalFeatures } from '../../../shared/data/data/property/property';
import { PropertyBasicDetailsComponent } from '../widgets/property-basic-details/property-basic-details.component';
import { PropertyAddressDetailsComponent } from '../widgets/property-address-details/property-address-details.component';
import { PropertyMediaComponent } from '../widgets/property-media/property-media.component';

@Component({
  selector: 'app-edit-property',
  standalone: true,
  imports:[PropertyBasicDetailsComponent,PropertyAddressDetailsComponent,PropertyMediaComponent],
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent {

  public AdditionalFeatures = AdditionalFeatures;

}
