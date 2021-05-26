import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {

  public bookings: any = [];
  selectedId: number =0;
  
  constructor(private bookService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAppointments().subscribe(data => this.bookings=data);
  }

}
