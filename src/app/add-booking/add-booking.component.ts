import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingsService } from '../bookings/bookings.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  pageTitle="Add Booking";
  constructor(private bookingService:BookingsService) { }
  form:FormGroup;

  addBooking=new FormGroup({
    trackingId:new FormControl(''),
    // orderDetails:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    contact:new FormControl(''),
    listProducts:new FormControl(''),
    status:new FormControl(''),
    deliveryId:new FormControl(''),
    deliveryContact:new FormControl('')
  })

  ngOnInit(): void {
  }
  saveData(){
    // console.log(this.addBooking.value);
    this.bookingService.saveBookingData(this.addBooking.value).subscribe(result=>{
      console.log(result);
    })
  }

}
