import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { EntidadComponent } from './components/entidad/entidad.component';
import { DocumentComponent } from './components/document/document.component';
import { ContributorComponent } from './components/contributor/contributor.component';
import { TipoContribuyenteService } from './services/contribuyente.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EntidadComponent,
    DocumentComponent,
    ContributorComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TipoContribuyenteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
