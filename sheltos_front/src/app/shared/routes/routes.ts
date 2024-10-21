import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'theme',
    loadChildren: () => import('../../components/home/home.routes').then(m => m.default) // Assurez-vous que le fichier exporte 'default'
  },
  {
    path: 'listing/grid-view',
    loadChildren: () => import('../../components/listing/grid-view/grid-view.routes').then(m => m.default)
  },
  {
    path: 'listing/list-view',
    loadChildren: () => import('../../components/listing/list-view/list-view.routes').then(m => m.default)
  },
  {
    path: 'listing/tab-layout',
    loadChildren: () => import('../../components/listing/tab-layout/tab-layout.routes').then(m => m.default)
  },
  {
    path: 'property',
    loadChildren: () => import('../../components/property/property.routes').then(m => m.default)
  },
  {
    path: 'page',
    loadChildren: () => import('../../components/pages/pages.routes').then(m => m.default)
  },
  {
    path: 'modules',
    loadChildren: () => import('../../components/modules/modules.routes').then(m => m.default)
  },
  {
    path: 'agent',
    loadChildren: () => import('../../components/agent/agent.routes').then(m => m.default)
  },
  {
    path: 'contact',
    loadChildren: () => import('../../components/contact/contact.routes').then(m => m.default)
  }
];
