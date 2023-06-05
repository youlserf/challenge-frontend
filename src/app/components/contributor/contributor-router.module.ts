import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ContributorComponent } from './contributor.component';

const routes: Routes = [
  {
    path: 'contributor',
    component: ContributorComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'create', component: FormComponent },
      { path: 'update', component: FormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributorRouterModule {}
