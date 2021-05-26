import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  validateAdmin(email:"admin", password:"admin"): Observable<any>{
    return this.http.get<any>("email="+email+"&"+"password="+password,this.httpOptions)
    .pipe(retry(1),catchError(this.handleError));

  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n  Error Message : ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

  }
}
