import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cityData, countryData } from '../../../../shared/data/data/property/property';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../property.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-property-address-details',
  standalone: true,
  imports: [NgbDropdownModule,ReactiveFormsModule],
  templateUrl: './property-address-details.component.html',
  styleUrls: ['./property-address-details.component.scss']
})
export class PropertyAddressDetailsComponent implements OnInit {

    propertyAdressDetails: FormGroup;
  
    constructor(private fb: FormBuilder, private propertyService: PropertyService) {
        this.propertyAdressDetails = this.fb.group({
            // property_id:1,
            street: ['', Validators.required],
            zip_code: ['', Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            // agency_id: 1, // optional
        });
    }
  
    ngOnInit(): void {}
  
    submitPropertyAddressDetails() {
      console.log('Données à envoyer :', this.propertyAdressDetails.value);
      this.propertyService.addProperty(this.propertyAdressDetails.value).subscribe({
          next: (response) => {
              console.log('Propriété ajoutée avec succès', response);
          },
          error: (error) => {
              console.error('Erreur lors de l\'ajout de la propriété', error);
              if (error.status === 422) {
                  // Afficher les erreurs de validation
                  console.log('Erreurs de validation:', error.error.errors);
              }
          }
      });
  }
  
  }
  

// import { Component, EventEmitter, Output } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-property-address-details',
//   templateUrl: './property-address-details.component.html',
//   styleUrls: ['./property-address-details.component.scss']
// })
// export class PropertyAddressDetailsComponent {

//   @Output() addressFormSubmit = new EventEmitter<FormGroup>();
//   addressForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.addressForm = this.fb.group({
//       street: [''],
//       zip_code: [''],
//       country: [''],
//       city: ['']
//     });
//   }

//   onSubmit() {
//     this.addressFormSubmit.emit(this.addressForm);
//   }
// }