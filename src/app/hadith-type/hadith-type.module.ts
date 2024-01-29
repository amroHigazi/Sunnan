import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HadithTypeRoutingModule } from './hadith-type-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HadithModule } from '../hadith/hadith.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HadithTypeRoutingModule,
    RouterModule,
    HttpClientModule,

  ]
})
export class HadithTypeModule { }
