import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../shared/Components/sidebar/sidebar.component';
import { CreateHadithComponent } from './Components/create-hadith/create-hadith.component';
import { auththGuard } from '../auth/Guards/authth.guard';
import { ListHadithComponent } from './Components/list-hadith/list-hadith.component';
import { HadithComponent } from './Components/hadith/hadith.component';
import { EditHadithComponent } from './Components/edit-hadith/edit-hadith.component';

const routes: Routes = [
  { path: 'hadith', component: HadithComponent },

  
{
  path: '',
  component:SidebarComponent,
   children: [
   { path: 'create-hadith', component: CreateHadithComponent , canActivate: [auththGuard]},
 
   { path: 'edit-hadith/:id', component: EditHadithComponent , canActivate: [auththGuard]},
   { path: 'list-hadith/:id', component: ListHadithComponent, canActivate: [auththGuard] },
 
 ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HadithRoutingModule { }
