import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Booking } from './booking.model';
import { IBooking } from './bookings';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit,OnDestroy {

  private bookingsSub:Subscription;
  loadedBookings: IBooking[];
  pageTitle="Bookings";
  errorMessage:string='';
  booking:Booking[];
  delete: any;

  constructor(private bookingsService:BookingsService) { }

  ngOnInit(): void {
    this.bookingsService.getbookings().subscribe((data:any)=>{   //step 3 for linking
      this.booking=data;
      console.log(data);
    })

    // void{
    //   this.OnDelete.deletebookings().subscribe((data:any)=>{
    //     this.delete=data;
    //     console.log(data);
    //   })
    // }

    
    // this.loadedBookings=this.bookingsService.bookings;
    // this.bookingsSub=this.bookingsService.bookings.subscribe(bookings =>{
    //   this.loadedBookings=bookings;
    // });

    // this.bookingsService.getBookings().subscribe({
    //   next:bookings=>{
    //     this.loadedBookings=bookings;
    //     // this.filteredProducts=this.products;
    //   },
    //   error:err=>this.errorMessage=err
    // });
  }

  ngOnDestroy(): void {
    if(this.bookingsSub){
      this.bookingsSub.unsubscribe();
    }
  }

}
