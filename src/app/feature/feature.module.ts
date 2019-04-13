import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../core/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [BugDashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class FeatureModule { }
