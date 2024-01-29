import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, } from 'rxjs/operators';
import {
  HttpClient, HttpErrorResponse, HttpHeaders,

} from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpoint: string = 'http://sunnan-001-site2.atempurl.com';
  
 // headers = new HttpHeaders().set('Content-Type', 'application/json');
 // currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
   // Http Options
   
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-language':'ar-SA'
      
    }),
  };

    //get Category 
    getCategories(): Observable<any> {
    return this.http
      .get<Category>(this.endpoint + '/collections/list',this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  //get Category by id
  getIncidentById(id :any): Observable<Category> {
    return this.http
      .get<Category>(this.endpoint + '/IncidentTypes/' + id,this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  


  //create Category 
   

    craeteIncident(role: Category): Observable<any> {
      let api = `${this.endpoint}/IncidentTypes`;
      return this.http.post(api,role ).pipe(catchError(this.handleError));
    }

  //update Category

  updateIncident(Incident: any): Observable<Category> {
    return this.http
      .put<Category>(
        this.endpoint + '/IncidentTypes',
        Incident,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  

  //delete Category
  deleteIncident(id: any) {
    return this.http
      .delete<Category>(this.endpoint + '/IncidentTypes/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  //handle Erorr fucntion 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}


