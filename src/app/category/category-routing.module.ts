import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { auththGuard } from '../auth/Guards/authth.guard';
import { ListCategoryComponent } from './Components/list-category/list-category.component';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';
import { CreateCategoryComponent } from './Components/create-category/create-category.component';
import { SidebarComponent } from '../shared/Components/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },

  
  {
    path: '',
    component:SidebarComponent,
     children: [
      { path: 'create-category', component: CreateCategoryComponent , canActivate: [auththGuard]},
  { path: 'edit-category/:id', component: EditCategoryComponent , canActivate: [auththGuard]},
  { path: 'list-category', component: ListCategoryComponent ,canActivate: [auththGuard]},

     ]}

  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
