import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TipoContribuyenteService } from './services/contribuyente/contribuyente.service';
import { CommonModule } from '@angular/common';
import { DocumentModule } from './components/document/document.module';
import { ContributorModule } from './components/contributor/contributor.module';

import { LayoutHomeComponent } from './layouts/layout-home/layout-home.component';
import { EntidadModule } from './components/entidad/entidad.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,

    LayoutHomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DocumentModule,
    ContributorModule,
    EntidadModule,
  ],
  providers: [TipoContribuyenteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
