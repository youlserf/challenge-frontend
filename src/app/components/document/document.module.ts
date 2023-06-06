import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocumentComponent } from './document.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { LayoutHomeComponent } from 'src/app/layouts/layout-home/layout-home.component';

@NgModule({
  declarations: [DocumentComponent, ListComponent, FormComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class DocumentModule {}
