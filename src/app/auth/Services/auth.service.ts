import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../Models/users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://sunnan-001-site2.atempurl.com';

  headers = new HttpHeaders().set('Content-Type', 'application/json',);
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  
  signIn(user: User) {
    console.log("access_token user",user)

    return this.http
      .post<any>(`${this.endpoint}/api/Accounts/login`, user).pipe(
        tap((res: any) => 
        {
        //  console.log("access_token res",res)
          localStorage.setItem('access_token',res.data.token);
          localStorage.setItem('username', res.data.email);

        }));
         
  }
  getCurrentUsername(): string | null {
    return localStorage.getItem('username');
  }
   

       getUserById(id: string) {
          return this.http.get<User>(this.endpoint +'/Accounts/'+ id,);
         }
         

  deleteUser(id: any) {
    return this.http
      .delete<User>(this.endpoint + '/Accounts/' + id, this.httpOptions)
  .pipe(retry(1), catchError(this.handleError));
  }

//   signIn(user: User):Observable<any>{
//     return this.http.post('http://localhost:5000/api/Accounts/login',user)
// }
  getToken() {
    return localStorage.getItem('token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['auth/log-in']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
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
