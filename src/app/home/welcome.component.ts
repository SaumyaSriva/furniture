import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']

})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  viewBook=true;
  addBook=false;
  deleteBook=false;

  constructor(private router:Router){

  }
  onAddBooking(){
    this.addBook=true;
    this.router.navigateByUrl('/addbookings')
  }
  onCancelAddBooking(){
    this.addBook=false;
  }
  onviewBookings(){
    this.viewBook=true;
  }
  onhideBookings(){
    this.viewBook=false;
  }
  onDeleteBooking(){
    this.deleteBook=true;
  }

}
