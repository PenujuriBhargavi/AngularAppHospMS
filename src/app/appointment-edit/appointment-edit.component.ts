import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../Appointment';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {

  public booking_id: any = this.aroute.snapshot.params['booking_id'];
  public bookingData: any = {};
  public selectedId: any;
  constructor(public bookAPI: BookingService,
    public aroute:ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {

    this.bookAPI.getAppointment(this.booking_id).subscribe((data: any) =>{
      if(data && data.length){
      this.bookingData = data[0];
      }
    })

    this.aroute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
  }

  updateAppointment() {
    this.bookAPI.updateAppointment(this.bookingData).subscribe(data =>
      this.router.navigate(['/show-appointments']));
  }
  onClick(book: any){
    this.router.navigate(['/appointment-edit',book.booking_id]);
  }

  gotoAppointments(book: Appointment) {
    this.router.navigate(['/show-appointments']);
  }

}
