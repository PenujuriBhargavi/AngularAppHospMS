import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private BASE_URL : string = "http://localhost:8080/HospitalManagementSystem";
  private SERVICE_URL : string = "/doctor";
  private GET_URL : string = "/alldoctor";
  private UPDATE_URL : string = "/updateDoctor";
  private DELETE_URL : string = "/deleteDoctor/";
  private SEARCH_URL : string = "/getDoctor/";
  private ADD_URL : string = "/createDoctor";
  private VALIDATE_URL: string ="/validate/"


  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  validateDoctor(email:any, password:any): Observable<any>{
    return this.http.get<any>(this.BASE_URL+this.SERVICE_URL+this.VALIDATE_URL + "email="+email+"&"+"password="+password,this.httpOptions)
    .pipe(retry(1),catchError(this.handleError));

  }


  
  getDoctors() : Observable<any> {
    return  this.http.get<any>(this.BASE_URL + this.SERVICE_URL + this.GET_URL);
  }

  getDoctor(doctor_id: any) : Observable<any> {
    return this.http.get<any>(this.BASE_URL + this.SERVICE_URL + this.SEARCH_URL + doctor_id);
    
  }

  createDoctor(doctor : any) : Observable<any> {
    console.log('from service method'+doctor)
    return this.http.post<any>(this.BASE_URL + this.SERVICE_URL + this.ADD_URL, JSON.stringify(doctor), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  updateDoctor(doctor : any) : Observable<any> {
    return this.http.put<Doctor>(this.BASE_URL + this.SERVICE_URL + this.UPDATE_URL, JSON.stringify(doctor), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  deleteDoctor(doctor_id : any) : Observable<any> {
    return this.http.delete<any>(this.BASE_URL + this.SERVICE_URL + this.DELETE_URL + doctor_id, this.httpOptions)
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
