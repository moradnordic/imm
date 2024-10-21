import { AddPropertyComponent } from './add-property/add-property.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PropertyListComponent } from './property-list/property-list.component';

export default [
  {
    path: 'add-property',
    component: AddPropertyComponent,
    data: {
      title: 'Add Property',
      breadcrumb: 'Add Property'
    }
  },
  {
    path: 'edit-property',
    component: EditPropertyComponent,
    data: {
      title: 'Edit Property',
      breadcrumb: 'Edit Property'
    }
  },
  {
    path: 'property-list',
    component: PropertyListComponent,
    data: {
      title: 'property List',
      breadcrumb: 'property List'
    }
  },
  {
    path: 'favourites',
    component: FavouriteComponent,
    data: {
      title: 'Favourites',
      breadcrumb: 'Favourites'
    }
  }
]

