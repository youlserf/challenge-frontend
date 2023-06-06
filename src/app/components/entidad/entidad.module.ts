import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EntidadComponent } from './entidad.component';

@NgModule({
  declarations: [EntidadComponent, ListComponent, FormComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class EntidadModule {}
