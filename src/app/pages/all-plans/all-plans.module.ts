import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPlansPageRoutingModule } from './all-plans-routing.module';

import { AllPlansPage } from './all-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPlansPageRoutingModule
  ],
  declarations: [AllPlansPage]
})
export class AllPlansPageModule {}
