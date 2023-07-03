import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Booking } from './booking.model';
import { IBooking } from './bookings';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  //private bookingsUrl = 'assets/bookings.json';
  private bookingsUrl = 'http://localhost:8082/furniture_booking';
  // private bookingsUrl = 'src/assets/bookings.json';

  constructor(private http: HttpClient) {}

  getbookings (
  ){
    return this.http.get(`http://localhost:8082/furniture_booking`)  
  }

  deletebookings (
   ) {
      return this.http.delete('http://localhost:8082/furniture_booking/id')
    }
  

    // private _bookings = new BehaviorSubject<Booking[]>([
  //   new Booking(
  //     'T1',
  //     'order1',
  //     'Brookefield,Bengaluru',
  //     11234,
  //     'bollywood',
  //     'shipped',
  //     'DP1',
  //     51234
  //   ),
  // ]);

  // get bookings() {
  //   return this._bookings;
  //   // .asObservable()
  // }

  getBookings(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(this.bookingsUrl).pipe(
      tap((data) => console.log('all', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error Occurred: ${err.error.message}`;
    } else {
      errorMessage = `service returned code: ${err.status},error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
  saveBookingData(data:any){
    console.log(data);
    return this.http.post(this.bookingsUrl, JSON.stringify(data));
  }
}
