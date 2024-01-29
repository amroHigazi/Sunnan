import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHadithTypeComponent } from './Components/list-hadith-type/list-hadith-type.component';
import { CreateHadithTypeComponent } from './Components/create-hadith-type/create-hadith-type.component';
import { SidebarComponent } from '../shared/Components/sidebar/sidebar.component';
import { auththGuard } from '../auth/Guards/authth.guard';
import { EditHadithTypeComponent } from './Components/edit-hadith-type/edit-hadith-type.component';

const routes: Routes = [
  { path: 'hadith-type', component: ListHadithTypeComponent },

  
{
  path: '',
  component:SidebarComponent,
   children: [
   { path: 'create-hadith-type', component: CreateHadithTypeComponent , canActivate: [auththGuard]},
 
   { path: 'edit-hadith-type/:id', component: EditHadithTypeComponent , canActivate: [auththGuard]},
   { path: 'list-hadith-type/:id', component: ListHadithTypeComponent },
 
 ]
 },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HadithTypeRoutingModule { }
