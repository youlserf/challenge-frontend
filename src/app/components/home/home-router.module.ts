import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EntidadComponent } from '../entidad/entidad.component';
import { DocumentComponent } from '../document/document.component';
import { ContributorComponent } from '../contributor/contributor.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];
/* children: [
  { path: 'entidad', component: EntidadComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'contributor', component: ContributorComponent },
], */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouterModule {}
