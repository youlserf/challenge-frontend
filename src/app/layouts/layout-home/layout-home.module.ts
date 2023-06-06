import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutHomeComponent } from './layout-home.component';

@NgModule({
  declarations: [LayoutHomeComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class DocumentModule {}
