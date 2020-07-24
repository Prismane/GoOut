import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPagePage } from './tabs-page.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPagePage, 
    children:[
     {
      path: 'feeds',
      loadChildren: () => import('../feeds/feeds.module').then( m => m.FeedsPageModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
    }
    ,
    {
      path: 'payment',
      loadChildren: () => import('../payment/payment.module').then( m => m.PaymentPageModule)
    },
    {
      path: 'create-plan',
      loadChildren: () => import('../create-plan/create-plan.module').then( m => m.CreatePlanPageModule)
    },
    {
      path: 'plan-date',
      loadChildren: () => import('../plan-date/plan-date.module').then( m => m.PlanDatePageModule)
    },
    {
      path: 'plan-name',
      loadChildren: () => import('../plan-name/plan-name.module').then( m => m.PlanNamePageModule)
    },
    {
      path: 'all-plans',
      loadChildren: () => import('../all-plans/all-plans.module').then( m => m.AllPlansPageModule)
    }
    ,
    {
      path: '',
      redirectTo: '../feeds/feeds.module',
      pathMatch: 'full'
    }
  ]
}, 
{
  path: '',
  redirectTo: '../feeds/feeds.module',
  pathMatch: 'full'
}
    
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
