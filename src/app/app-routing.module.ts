import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tabs-page',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then( m => m.TabsPagePageModule)
  },
  {
    path: 'feeds',
    loadChildren: () => import('./pages/feeds/feeds.module').then( m => m.FeedsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'create-plan',
    loadChildren: () => import('./pages/create-plan/create-plan.module').then( m => m.CreatePlanPageModule)
  },
  {
    path: 'plan-date',
    loadChildren: () => import('./pages/plan-date/plan-date.module').then( m => m.PlanDatePageModule)
  },
  {
    path: 'plan-name',
    loadChildren: () => import('./pages/plan-name/plan-name.module').then( m => m.PlanNamePageModule)
  },
  {
    path: 'all-plans',
    loadChildren: () => import('./pages/all-plans/all-plans.module').then( m => m.AllPlansPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
