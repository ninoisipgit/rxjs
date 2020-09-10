import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';


@NgModule({
  declarations: [
    PartOneComponent,
    PartTwoComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
