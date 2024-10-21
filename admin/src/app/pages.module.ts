import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Importer ReactiveFormsModule
import { RouterModule, Routes } from '@angular/router';

import { PropertyBasicDetailsComponent } from './components/property/widgets/property-basic-details/property-basic-details.component';

const routes: Routes = [
  {
    path: 'property-basic-details',
    component: PropertyBasicDetailsComponent
  }
];

@NgModule({
  declarations: [
    PropertyBasicDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,               // Pour les formulaires Template-driven
    ReactiveFormsModule,        // Assure-toi de bien avoir ReactiveFormsModule ici
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
