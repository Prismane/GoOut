import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanNamePageRoutingModule } from './plan-name-routing.module';

import { PlanNamePage } from './plan-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanNamePageRoutingModule
  ],
  declarations: [PlanNamePage]
})
export class PlanNamePageModule {}
