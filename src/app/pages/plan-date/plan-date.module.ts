import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanDatePageRoutingModule } from './plan-date-routing.module';

import { PlanDatePage } from './plan-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanDatePageRoutingModule
  ],
  declarations: [PlanDatePage]
})
export class PlanDatePageModule {}
