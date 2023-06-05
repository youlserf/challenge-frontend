import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { EntidadComponent } from '../entidad/entidad.component';
import { DocumentComponent } from '../document/document.component';
import { ContributorComponent } from '../contributor/contributor.component';

@NgModule({
  declarations: [
    HomeComponent,

    EntidadComponent,
    DocumentComponent,
    ContributorComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
