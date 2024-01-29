import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule, routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor } from './app/app/auth.Interceptors';
import { LoadingInterceptor } from './app/app/Loading.Interceptor';

bootstrapApplication(AppComponent,{ providers: [
    importProvidersFrom(AppRoutingModule),
    provideHttpClient(
        withInterceptors([LoadingInterceptor,authInterceptor]),
      ),
    provideAnimations()
]} );



 
