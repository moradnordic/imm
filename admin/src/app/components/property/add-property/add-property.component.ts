import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyAddressDetailsComponent } from '../widgets/property-address-details/property-address-details.component';
import { CommonModule } from '@angular/common';
import { PropertyBasicDetailsComponent } from '../widgets/property-basic-details/property-basic-details.component';
import { PropertyMediaComponent } from '../widgets/property-media/property-media.component';
import { PropertyService } from '../property.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-property',
  standalone: true,
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule,PropertyBasicDetailsComponent,PropertyAddressDetailsComponent,PropertyMediaComponent],
})
export class AddPropertyComponent {

  constructor(private propertyService: PropertyService) {}

  // onSubmitAllForms(basicDetailsForm: any, addressForm: any, mediaForm: any) {
  //   // Soumettre les détails basiques
  //   this.propertyService.submitBasicDetails(basicDetailsForm.value).subscribe(response => {
  //     console.log('Basic details submitted:', response);
  //   });

  //   // Soumettre les détails d'adresse
  //   this.propertyService.submitAddressDetails(addressForm.value).subscribe(response => {
  //     console.log('Address details submitted:', response);
  //   });

  //   // Soumettre les médias
  //   this.propertyService.submitMediaDetails(mediaForm.value).subscribe(response => {
  //     console.log('Media details submitted:', response);
  //   });
  // }
}
