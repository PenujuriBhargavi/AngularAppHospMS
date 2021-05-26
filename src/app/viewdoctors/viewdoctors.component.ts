import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-viewdoctors',
  templateUrl: './viewdoctors.component.html',
  styleUrls: ['./viewdoctors.component.css']
})
export class ViewdoctorsComponent implements OnInit {

  public doctors: any = [];
  selectedId: number =0;
  constructor(private doctorService: DoctorserviceService, private router: Router) { }


  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(data => this.doctors=data);
  }

  onDelete(doctors: Doctor) {
    this.selectedId = doctors.doctor_id;
    if(window.confirm('Are you sure, you want to delete?')) {
      this.doctorService.deleteDoctor(this.selectedId).subscribe(data => {
        this.router.navigate(['/viewdoctors'])
      })
    }
  }

 

  

}
