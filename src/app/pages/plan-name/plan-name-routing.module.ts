import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanNamePage } from './plan-name.page';

const routes: Routes = [
  {
    path: '',
    component: PlanNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanNamePageRoutingModule {}
