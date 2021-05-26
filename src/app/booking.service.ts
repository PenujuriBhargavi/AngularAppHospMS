import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private BASE_URL : string = "http://localhost:8080/HospitalManagementSystem";
  private SERVICE_URL : string = "/patient";
  private GET_URL : string = "/booklist";
  private UPDATE_URL : string = "/updateAppointment";
  private SEARCH_URL : string = "/getAppointment/";
  private ADD_URL : string = "/bookAppointment";
  
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  bookAppointment(book : any) : Observable<any> {

    console.log('from service method'+book)
    return this.http.post<any>(this.BASE_URL + this.SERVICE_URL + this.ADD_URL, JSON.stringify(book), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
    
  }
  getAppointment(booking_id: any) : Observable<any> {
    return this.http.get<any>(this.BASE_URL + this.SERVICE_URL + this.SEARCH_URL + booking_id);
  }

  getAppointments() : Observable<any> {
    return  this.http.get<any>(this.BASE_URL + this.SERVICE_URL + this.GET_URL);
  }

  updateAppointment(book : any) : Observable<any> {
    return this.http.put<any>(this.BASE_URL + this.SERVICE_URL + this.UPDATE_URL, JSON.stringify(book), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
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
