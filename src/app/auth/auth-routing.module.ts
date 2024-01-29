import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../shared/Components/sidebar/sidebar.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { auththGuard } from './Guards/authth.guard';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { ListUserComponent } from './Components/list-user/list-user.component';
import { AuthComponent } from './Components/auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },

  {
      path: 'log-in',
      component: LoginUserComponent,
  },
 


  { path: 'create-user', component: CreateUserComponent , canActivate: [auththGuard]},
  { path: 'edit-user/:id', component: EditUserComponent , canActivate: [auththGuard]},
  { path: 'list-user', component: ListUserComponent , canActivate: [auththGuard]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
