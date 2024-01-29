import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HadithRoutingModule } from './hadith-routing.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { HadithTypeModule } from '../hadith-type/hadith-type.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HadithRoutingModule,
    RouterModule,
    MatDialogModule,

  ]
})
export class HadithModule { }
