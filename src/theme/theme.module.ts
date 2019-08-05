import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlickityModule } from 'ngx-flickity';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL = [
  MatSelectModule,
  MatMenuModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlickityModule,
    TranslateModule,
    MATERIAL
  ],
  exports: [
    FlickityModule,
    TranslateModule,
    MATERIAL
  ]
})
export class ThemeModule { }
