import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit { 
  public doctor_id: any = this.aroute.snapshot.params['doctor_id'];
  public doctorData: any = {};
  public selectedId: any;

  constructor(
    public doctorAPI :DoctorserviceService ,
    public aroute:ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.doctorAPI.getDoctor(this.doctor_id).subscribe((data: any) =>{
      if(data && data.length){
      this.doctorData = data[0];
      }
    })

    this.aroute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
  }

  updateDoctor() {
    this.doctorAPI.updateDoctor(this.doctorData).subscribe(data =>
      this.router.navigate(['/viewdoctors']));
  }
 
  onClick(doctor: any){
    this.router.navigate(['/edit-doctor',doctor.doctor_id]);
  }

  gotoDoctors(doctor: Doctor) {
    this.router.navigate(['/viewdoctors']);
  }

  


}
