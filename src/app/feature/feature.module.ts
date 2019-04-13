import { MaterialModule } from './../core/services/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';

@NgModule({
  declarations: [BugDashboardComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule
  ]
})
export class FeatureModule { }
