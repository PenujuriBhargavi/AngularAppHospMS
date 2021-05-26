import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-addingdoctor',
  templateUrl: './addingdoctor.component.html',
  styleUrls: ['./addingdoctor.component.css']
})
export class AddingdoctorComponent implements OnInit {
  exform=new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
    password:new FormControl('',[Validators.required,Validators.pattern('(?=.[A-Za-z])(?=.[0-9])(?=.[$@$!#^~%?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
    mobilenumber:new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    address:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    spe:new FormControl('',Validators.required)
  })

  get f(){
    return this.exform.controls;
  }


  constructor(public doctorAPI : DoctorserviceService,public router : Router) { }

  @Input()
  public doctorDetails = {
    firstName:'',
    lastName:'',
    specialization:'',
    doctor_dob:Date,
    gender:'',
    phone_number:0,
    email:'',
    address:'',
    password:''
  }
  public doctors : any =[];
  public doctor : any={};

  createDoctor() {
    console.log("from component"+this.doctorDetails );
    
    this.doctorAPI.createDoctor(this.doctorDetails).subscribe((data: {}) => { 
      console.log('FRom  subsc ' +data);
      this.router.navigate(['/viewdoctors']) });
    
  }

  getDoctors(){
    this.doctorAPI.getDoctors().subscribe(data => this.doctors = data);
  }

  getDoctor(doctor_id:any){
    this.doctorAPI.getDoctor(doctor_id).subscribe((data: any) => {
        this.doctor = data[0];
        console.log("Doctor Record : "+this.doctor);
    });
  }

  updateDoctor(){
    this.doctorAPI.updateDoctor(this.doctor).subscribe();

    
  }

  deleteDoctor(doctor_id : any) {
    this.doctorAPI.deleteDoctor(doctor_id).subscribe();

    this.getDoctors();
    
  }

  ngOnInit(): void {
  }

}