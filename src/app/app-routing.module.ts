import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { DocumentRouterModule } from './components/document/document-router.module';
import { EntidadRouterModule } from './components/entidad/entidad-router.module';
import { ContributorRouterModule } from './components/contributor/contributor-router.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ContributorRouterModule,
    DocumentRouterModule,
    EntidadRouterModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
