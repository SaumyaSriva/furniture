import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
import { BgImageComponent } from './bg-image/bg-image.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BookingsComponent,
    AddBookingComponent,
    DeleteBookingComponent,
    BgImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'},
      {path:'welcome',component:WelcomeComponent},
      {path:'bookings',component:BookingsComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

bootstrap: [BgImageComponent];   export class module { } 