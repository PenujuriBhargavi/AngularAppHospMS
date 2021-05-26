import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {

  form=new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')])
  })

  get f(){
    return this.form.controls;
  }

  constructor(
    public doctorAPI:DoctorserviceService, public router: Router
  ) { }

  ngOnInit(): void {
  }

  public email : any;
  public password : any;
  public doctorData : any = {};

  validateDoctor() {
    this.doctorAPI.validateDoctor(this.email, this.password).subscribe((data: {}) => {
       this.doctorData = data;
       console.log("DoctorData :" + this.doctorData);

       if(this.doctorData == null) {
        alert("Please Enter Correct Details");
        this.router.navigate(["doctorlogin"]);
      }
      else{
        this.router.navigate([
          "doctordashboard"]);
      }
      });

  }

}
