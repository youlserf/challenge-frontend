import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EntidadComponent } from './components/home/entidad/entidad.component';
import { DocumentComponent } from './components/home/document/document.component';
import { ContributorComponent } from './components/home/contributor/contributor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'entidad', component: EntidadComponent },
      { path: 'document', component: DocumentComponent },
      { path: 'contributor', component: ContributorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
