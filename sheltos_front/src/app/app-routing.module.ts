import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layouts/layout/layout.component'; // Vérifiez que le chemin est correct
import { content } from './shared/routes/routes'; // Importez les routes du fichier de routes partagées

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Le layout principal qui contiendra d'autres composants
    children: content, // Ajoute les routes enfants définies dans 'content'
  },
  { path: '**', redirectTo: '' } // Redirige toute route non trouvée vers la page d'accueil ou une route par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
