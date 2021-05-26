import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../Patient';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-addingpatient',
  templateUrl: './addingpatient.component.html',
  styleUrls: ['./addingpatient.component.css']
})
export class AddingpatientComponent implements OnInit {

  

  form=new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastname: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}')]),
    mobilenumber:new FormControl('',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    gender:new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    symptoms: new FormControl('',Validators.required),
    age:new FormControl('',Validators.required)

  })
  get f(){
    return this.form.controls;
  }
  

  constructor(public patientAPI : PatientserviceService,public router : Router ) { }


  public patientDetails={    firstName:'',
    lastName:'',
    gender:'',
    diagnosis:'',
    patient_age:0,
    phone_number:0,
    email:'',
    address:'',
    password:''
  }
  public patients : any =[];
  public patient : any={};
 
  createPatient() {
    console.log("from component"+this.patientDetails );
    
    this.patientAPI.createPatient(this.patientDetails).subscribe((data: {}) => { 
      console.log('FRom  subsc ' +data);
      this.router.navigate(['/app-viewpatients']) });
      window.alert("patient added successfuly");
    
  }

  getPatients(){
    this.patientAPI.getPatients().subscribe(data => this.patients = data);
  }

  getPatient(patient_id:any){
    this.patientAPI.getPatient(patient_id).subscribe((data: any) => {
        this.patient = data[0];
        console.log("Patient Record : "+this.patient);
    });
  }

  updatePatient(){
    this.patientAPI.updatePatient(this.patient).subscribe();

    
  }

  deletePatient(patient_id : any) {
    this.patientAPI.deletePatient(patient_id).subscribe();

    this.getPatients();
    
  }

  ngOnInit(): void {
  }

}