import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {

  form=new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')])
  })

  get f(){
    return this.form.controls;
  }

  constructor(public patientAPI:PatientserviceService, public router: Router) { }

  ngOnInit(): void {
  }

  public email : any;
  public password : any;
  public patientData : any = {};

  validatePatient() {
    this.patientAPI.validatePatient(this.email, this.password).subscribe((data: {}) => {
       this.patientData = data;
       console.log("Patient Data :" + this.patientData);

       if(this.patientData == null) {
        alert("Please Enter Correct Details");
        this.router.navigate(["patientlogin"]);
      }
      else{
        this.router.navigate([
          "patientdashboard"]);
      }
      });

  }

}
