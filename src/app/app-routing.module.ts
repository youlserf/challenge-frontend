import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { HomeRouterModule } from './components/home/home-router.module';
import { EntidadComponent } from './components/entidad/entidad.component';
import { ContributorComponent } from './components/contributor/contributor.component';
import { DocumentComponent } from './components/document/document.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'entidad', component: EntidadComponent },
  { path: 'contribuyente', component: ContributorComponent },
  { path: 'documento', component: DocumentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
