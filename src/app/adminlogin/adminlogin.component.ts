import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  form=new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required] )
  })

  get f(){
    return this.form.controls;
  }


  public email : any;
  public password : any;

  constructor( public router: Router) { }

  ngOnInit(): void {
  }


  validateAdmin() {
    if(this.email == "admin" && this.password == "admin"){
      this.router.navigate([
        "admindashboard"]);
    }
    else{
      alert("Please Enter Correct Details");
      this.router.navigate([
        "adminlogin"]);
    }

  }

}
