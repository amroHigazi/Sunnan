import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';
import { AuthService } from './auth/Services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hadith-project';
  constructor(public loader:LoaderService,public authService:AuthService){

  }
  logout() {
    this.authService.doLogout()
  }
}
