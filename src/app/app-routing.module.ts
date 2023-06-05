import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { HomeRouterModule } from './components/home/home-router.module';
import { EntidadComponent } from './components/entidad/entidad.component';
import { ContributorComponent } from './components/contributor/contributor.component';
import { DocumentComponent } from './components/document/document.component';
import { ContributorRouterModule } from './components/contributor/contributor-router.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'entidad', component: EntidadComponent },
  { path: 'documento', component: DocumentComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRouterModule,
    ContributorRouterModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
