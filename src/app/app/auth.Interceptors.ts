import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

    export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
      const authToken =localStorage.getItem('access_token');
        if(authToken){
            const reqWithHeader = req.clone({
                headers: req.headers.set('Authorization', "Bearer " + authToken),
              });
              return next(reqWithHeader);
        }
      return next(req);
    }
