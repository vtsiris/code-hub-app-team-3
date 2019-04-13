import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../core/modules/material.module';
import { GearComponent } from './gear/gear.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GearComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    GearComponent]
})
export class SharedModule { }
