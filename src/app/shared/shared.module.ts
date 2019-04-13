import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../core/modules/material.module';
import { GearComponent } from './gear/gear.component';
import { RouterModule } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GearComponent,
    OpenCloseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    GearComponent,
    OpenCloseComponent]
})
export class SharedModule { }