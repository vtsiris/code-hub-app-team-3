import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../core/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { HomeComponent } from './home/home.component';
import { NewBugComponent } from './new-bug/new-bug.component';

@NgModule({
  declarations: [BugDashboardComponent, HomeComponent, NewBugComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    BugDashboardComponent,
    HomeComponent,
    NewBugComponent
  ]
})
export class FeatureModule { }
