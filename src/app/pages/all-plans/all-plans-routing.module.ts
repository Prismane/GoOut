import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPlansPage } from './all-plans.page';

const routes: Routes = [
  {
    path: '',
    component: AllPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPlansPageRoutingModule {}
