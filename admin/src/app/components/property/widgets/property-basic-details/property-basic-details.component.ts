// import { Component, OnInit } from '@angular/core'; 
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; // Import du FormBuilder et FormGroup
import { PropertyService } from '../../property.service';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-basic-details',
  standalone: true,
  templateUrl: './property-basic-details.component.html',
  styleUrls: ['./property-basic-details.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PropertyBasicDetailsComponent implements OnInit {
  propertyForm: FormGroup;
   successMessage: string = '';
  propertyId: number | null = null;
  isLoading: boolean = false; 

  constructor(private fb: FormBuilder, private propertyService: PropertyService) {

      this.propertyForm = this.fb.group({
          type: ['', Validators.required],
          status: ['', Validators.required],
          price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          rooms: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          beds: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          baths: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          area: ['', Validators.required],
          agency_id: 1, // Optionnel
          image: [null], // Champ pour l'image
          description: [''],
      });
  }

  ngOnInit(): void {}

  submitPropertyDetails() {
    this.isLoading = true; // Activer l'état de chargement
    const formData = new FormData();

    for (const key in this.propertyForm.value) {
        if (key !== 'image') {
            formData.append(key, this.propertyForm.value[key]);
        }
    }

    const image = this.propertyForm.get('image')?.value;
    if (image) {
        formData.append('image', image);
    }

    this.propertyService.addProperty(formData).subscribe({
        next: (response) => {
            console.log('Propriété ajoutée avec succès', response);
            this.successMessage = 'La propriété a été modifiée avec succès !'; 
            this.propertyForm.reset(); 
            this.isLoading = false; // pr désactiver  chargement 
        },
        error: (error) => {
            console.error('Erreur lors de l\'ajout de la propriété', error);
            this.successMessage = ''; 
            this.isLoading = false; // pr désactiver même en cas d'erreur
        }
    });
}

onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
      this.propertyForm.patchValue({
          image: file
      });
  }
}
}




// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { agencyData, propertyDetails, propertyStatus } from '../../../../shared/data/data/property/property';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-property-basic-details',
//   standalone: true,
//   imports: [NgbDropdownModule],
//   templateUrl: './property-basic-details.component.html',
//   styleUrls: ['./property-basic-details.component.scss']
// })
// export class PropertyBasicDetailsComponent {

//   public propertyStatus = propertyStatus;
//   public propertyDetails = propertyDetails;
//   public agencyData = agencyData;
//   public value = 'For Sale';
//   public roomValue = 1;
//   public bedValue = 1;
//   public bathValue = 1;
//   public agencyValue = 'Premiere';
//   public description = '';
//   public currentPageURL: string = '';
//   public formOption: string = '';

//   constructor(private router: Router) {
//     this.currentPageURL = this.router.url;
//     if (this.currentPageURL == '/property/add-property') {
//       this.formOption = 'Add'
//     } else if (this.currentPageURL == '/property/edit-property') {
//       this.formOption = 'Edit'
//     }

//     if (this.formOption == 'Edit') {
//       this.value = 'For Rent',
//         this.roomValue = 3;
//       this.bedValue = 2;
//       this.bathValue = 1;
//       this.agencyValue = 'Premiere';
//       this.description = 'Air conditioning unit, new furnace, all appliances included. Basement walks out to fenced backyard. Huge deck in back. Lots of updates.'
//     }
//   }
// }








// // import { Component, EventEmitter, Output } from '@angular/core';
// // import { FormBuilder, FormGroup } from '@angular/forms';

// // @Component({
// //   selector: 'app-property-basic-details',
// //   templateUrl: './property-basic-details.component.html',
// //   styleUrls: ['./property-basic-details.component.scss']
// // })
// // export class PropertyBasicDetailsComponent {

// //   @Output() basicDetailsFormSubmit = new EventEmitter<FormGroup>();
// //   basicDetailsForm: FormGroup;

// //   constructor(private fb: FormBuilder) {
// //     this.basicDetailsForm = this.fb.group({
// //       title: [''],
// //       description: [''],
// //       price: ['']
// //     });
// //   }

// //   onSubmit() {
// //     this.basicDetailsFormSubmit.emit(this.basicDetailsForm);
// //   }
// // }

