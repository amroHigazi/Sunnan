import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/Components/sidebar/sidebar.component';
import { ListCategoryComponent } from './category/Components/list-category/list-category.component';
import { AuthGuard } from './auth/Guards/authth.guard';

export const routes: Routes = [ 
    
    {path: '', redirectTo: 'auth/log-in', pathMatch: 'full' },
    {
      path: '',
      component:SidebarComponent,
       children: [
        {path: 'list-category', component: ListCategoryComponent , canActivate: [AuthGuard]}
     ]
     },

    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'hadith', loadChildren: () => import('./hadith/hadith.module').then(m => m.HadithModule) },
    { path: 'hadith-type', loadChildren: () => import('./hadith-type/hadith-type.module').then(m => m.HadithTypeModule) },
    { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],    exports: [RouterModule]
  })
  export class AppRoutingModule { }