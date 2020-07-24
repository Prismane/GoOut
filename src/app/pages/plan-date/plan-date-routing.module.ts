import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanDatePage } from './plan-date.page';

const routes: Routes = [
  {
    path: '',
    component: PlanDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanDatePageRoutingModule {}
