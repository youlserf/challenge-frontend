import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EntidadComponent } from './entidad.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutHomeComponent } from 'src/app/layouts/layout-home/layout-home.component';

const routes: Routes = [
  {
    path: 'entity',
    canActivate: [AuthGuard],
    component: LayoutHomeComponent,
    children: [
      {
        path: '',
        component: EntidadComponent,
        children: [
          { path: '', component: ListComponent },
          { path: 'create', component: FormComponent },
          { path: 'update', component: FormComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadRouterModule {}
