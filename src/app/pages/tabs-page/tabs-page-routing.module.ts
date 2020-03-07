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
    },
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
