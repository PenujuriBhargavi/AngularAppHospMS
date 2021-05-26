import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Patient } from './Patient';




@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
 
  private BASE_URL : string = "http://localhost:8080/HospitalManagementSystem";
  private SERVICE_URL : string = "/patient";
  private GET_URL : string = "/allpatient";
  private UPDATE_URL : string = "/updatePatient";
  private DELETE_URL : string = "/deletePatient/";
  private SEARCH_URL : string = "/getPatient/";
  private ADD_URL : string = "/createPatient";
  private BOOK_URL : string = "/bookAppointment";
  private VALIDATE_URL: string ="/validate/";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  validatePatient(email:any, password:any): Observable<any>{
    return this.http.get<any>(this.BASE_URL+this.SERVICE_URL+this.VALIDATE_URL + "email="+email+"&"+"password="+password,this.httpOptions)
    .pipe(retry(1),catchError(this.handleError));

  }


  getPatients() : Observable<any> {
    return  this.http.get<any>(this.BASE_URL + this.SERVICE_URL + this.GET_URL);
  }

  getPatient(patient_id: any) : Observable<any> {
    return this.http.get<any>(this.BASE_URL + this.SERVICE_URL + this.SEARCH_URL + patient_id);
  }

  createPatient(patient : any) : Observable<any> {

    console.log('from service method'+patient)
    return this.http.post<any>(this.BASE_URL + this.SERVICE_URL + this.ADD_URL, JSON.stringify(patient), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
    
  }

  updatePatient(patient : any) : Observable<any> {
    return this.http.put<any>(this.BASE_URL + this.SERVICE_URL + this.UPDATE_URL, JSON.stringify(patient), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  deletePatient(patient_id : any) : Observable<any> {
    return this.http.delete<any>(this.BASE_URL + this.SERVICE_URL + this.DELETE_URL + patient_id, this.httpOptions)
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
