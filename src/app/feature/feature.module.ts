import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../core/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { HomeComponent } from './home/home.component';
import { BugHandlerComponent } from './bug-handler/bug-handler.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PriorityPipePipe } from './pipes/priority-pipe.pipe';

@NgModule({
  declarations: [BugDashboardComponent, HomeComponent, BugHandlerComponent, SearchBarComponent, PriorityPipePipe],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    BugDashboardComponent,
    HomeComponent,
    BugHandlerComponent
  ]
})
export class FeatureModule { }
