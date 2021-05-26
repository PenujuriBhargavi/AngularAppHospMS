import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-show-appointments',
  templateUrl: './show-appointments.component.html',
  styleUrls: ['./show-appointments.component.css']
})
export class ShowAppointmentsComponent implements OnInit {

  public bookings: any = [];
  selectedId: number =0;
  
  constructor(private bookService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAppointments().subscribe(data => this.bookings=data);
  }

}
