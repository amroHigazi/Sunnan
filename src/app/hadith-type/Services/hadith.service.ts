import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, } from 'rxjs/operators';
import {
  HttpClient, HttpErrorResponse, HttpHeaders,

} from '@angular/common/http';
import { Router } from '@angular/router';
import { HadithType } from '../Models/Hadith-type';


@Injectable({
  providedIn: 'root'
})
 export class HadithService {

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

  gethadithTypecategoryId(id :any): Observable<HadithType> {
    return this.http
      .get<HadithType>(this.endpoint + "/"+id +'/sections',this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  //create HadithType 
   
    craeteIncident(role: HadithType): Observable<any> {
      let api = `${this.endpoint}/IncidentTypes`;
      return this.http.post(api,role ).pipe(catchError(this.handleError));
    }

  //update HadithType

  updateIncident(Incident: any): Observable<HadithType> {
    return this.http
      .put<HadithType>(
        this.endpoint + '/IncidentTypes',
        Incident,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  

  //delete Category
  deleteIncident(id: any) {
    return this.http
      .delete<HadithType>(this.endpoint + '/IncidentTypes/' + id, this.httpOptions)
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


