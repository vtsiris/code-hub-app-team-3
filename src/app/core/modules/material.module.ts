import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    MatTableModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
