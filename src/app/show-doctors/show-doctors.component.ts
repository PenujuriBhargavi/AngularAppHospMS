import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {

  public doctors: any = [];
  selectedId: number =0;
  constructor(private doctorService: DoctorserviceService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(data => this.doctors=data);
  }

}
