import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorComponent } from './contributor.component';
import { Router, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { LayoutHomeComponent } from 'src/app/layouts/layout-home/layout-home.component';

@NgModule({
  declarations: [ContributorComponent, FormComponent, ListComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ContributorModule {}
