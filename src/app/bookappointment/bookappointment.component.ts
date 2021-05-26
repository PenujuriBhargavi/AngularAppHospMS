import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  exform= new FormGroup({

    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
    mobilenumber:new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    symptoms:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    app:new FormControl('',Validators.required),
    sym:new FormControl('',Validators.required),
    vac:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })

  get f(){
    return this.exform.controls;

  }

  constructor(public bookAPI : BookingService,public router : Router) { }

  public bookingDetails={    
    vaccine_status:'',
    vaccine_type:'',
    covid_symptoms:'',
    appointment_date:'',
    firstName:'',
    lastName:'',
    gender:'',
    symptoms:'',
    age:0,
    phone_number:0,
    email:'',
    address:'',
    approval_status:''
  }


  public bookings : any =[];
  public book : any={};


  bookAppointment() {
    console.log("from component"+this.bookingDetails );
    
    this.bookAPI.bookAppointment(this.bookingDetails).subscribe((data: {}) => { 
      console.log('FRom  subsc ' +data);
      this.router.navigate(['/appointment-history']) });
      window.alert("appointment submitted successfuly");
    
  }
  ngOnInit(): void {
  }

}