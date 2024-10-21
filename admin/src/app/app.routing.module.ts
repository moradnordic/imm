import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { PropertyBasicDetailsComponent } from './components/property/widgets/property-basic-details/property-basic-details.component';

const routes: Routes = [
    { path: 'properties', component: PropertyListComponent },
    { path: 'properties/edit/:id', component: PropertyBasicDetailsComponent },
    { path: '', redirectTo: '/properties', pathMatch: 'full' },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }