import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocumentComponent } from './document.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [DocumentComponent, ListComponent, FormComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class DocumentModule {}
