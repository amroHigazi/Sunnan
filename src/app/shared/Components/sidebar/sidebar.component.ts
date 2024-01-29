import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginUserComponent } from 'src/app/auth/Components/login-user/login-user.component';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { SerachService } from 'src/app/serach/serach.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginUserComponent],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  currentUsername:any
  filteredItems:any=[]
  allItems :any=[]

  constructor(public authService:AuthService,public serachService:SerachService){}
  ngOnInit(): void {
    
    this.getusername()
    this.serachService.getData().subscribe((data:any) => {
      this.allItems = data;
      this.filteredItems = data;
    });
  }
  
  logout() {
    this.authService.doLogout();
    localStorage.removeItem('username');
  }
 
  getusername() {
   
    this.currentUsername = this.authService.getCurrentUsername();
 
 
  }
  get userInitials(): any {
    return this.currentUsername.substr(0, 1).toUpperCase()+ ' ' + this.currentUsername.charAt(1).toUpperCase()
  }

  
}
