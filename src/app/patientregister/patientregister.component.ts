import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patientregister',
  templateUrl: './patientregister.component.html',
  styleUrls: ['./patientregister.component.css']
})
export class PatientregisterComponent implements OnInit {

  form=new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
    email: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])
  })

  get f(){
    return this.form.controls;
  }


  constructor(public patientAPI : PatientserviceService,public router : Router ) { }

  @Input()
  patientDetails = {
    firstName:'',
    email:'',
    password:''
  }
  public patients : any =[];
  public patient : any={};
 
  createPatient() {

    console.log("from component"+this.patientDetails );

    this.patientAPI.createPatient(this.patientDetails).subscribe((data: {}) => { 
      console.log('FRom  subsc ' +data);
      this.router.navigate(['/patientlogin']) });
  
  }

  ngOnInit(): void {
  }

}
