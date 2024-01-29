import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, } from 'rxjs/operators';
import {
  HttpClient, HttpErrorResponse, HttpHeaders,

} from '@angular/common/http';
import { Router } from '@angular/router';

import { Hadith } from '../Models/hadith';
import { HadithEdit } from '../Models/editHadith';


@Injectable({
  providedIn: 'root'
})
 export class HadithItemsService {

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
  //   getCategories(): Observable<any> {
  //   return this.http
  //     .get<HadithType>(this.endpoint + '/Categories/list')
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  //get HadithType by categoryId

  gethadithbyTypeId(id :any): Observable<Hadith> {
    return this.http
      .get<Hadith>(this.endpoint + "/"+id +'/videos',this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  getvideobyTypeId(id :any): Observable<any> {
    return this.http
      .get<any>(this.endpoint + "/videos/"+id,this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  //create HadithType 
   
    craeteHadith(role: Hadith): Observable<any> {
      let api = `${this.endpoint}/videos/upload`;
      return this.http.post(api,role ).pipe(catchError(this.handleError));
    }

  //update HadithType

  // updateHadith(id: any): Observable<HadithEdit> {
  //   return this.http
  //     .put<HadithEdit>(
  //       this.endpoint + '/videos/'+id,
  //       id,
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  updateHadith(id: string, data: any): Observable<any> {
    return this.http.put(`${this.endpoint}/videos/${id}`, data);
  }

  //delete Category
  deleteHadith(id: any) {
    return this.http
      .delete<Hadith>(this.endpoint + '/videos/' + id, this.httpOptions)
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


