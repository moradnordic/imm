import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layouts/layout/layout.component';
import { content } from './shared/routes/routes';
import { FullLayoutComponent } from './shared/components/layouts/full-layout/full-layout.component';
import { fullContent } from './shared/routes/full-routes';

export const routes: Routes = [
    {
        path : '',
        redirectTo : '/dashboard',
        pathMatch : 'full'
      },
      {
        path : '',
        component : LayoutComponent,
        children : content
      },
      {
        path: '',
        component: FullLayoutComponent,
        children: fullContent
      },
      {
        path : '**',
        redirectTo : '',
      }
];
