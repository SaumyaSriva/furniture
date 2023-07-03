import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings/bookings.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {

  constructor(private bookingService:BookingsService) {
    
   }

  ngOnInit(): void {
  }
  OnDelete(){
    this.bookingService.deletebookings();
  }
}
