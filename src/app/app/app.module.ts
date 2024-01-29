import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CategoryModule
    

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],

})
export class AppModule { }

