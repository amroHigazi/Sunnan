import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from '../app.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    HttpClientModule,
     RouterModule

  ],
 

})
export class CategoryModule { }
