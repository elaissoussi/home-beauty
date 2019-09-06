import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointementService } from '../services/appointement.service';
import { AvailabilityList } from '../models/AvailabilityList';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
   
export class AppointmentPage {
   
   zipcode : number = undefined ;
   date : Date = undefined;
   availabilityList : AvailabilityList = undefined;

  constructor(private http : HttpClient,
              private router : Router,
              private appointmentService : AppointementService) {}
    
  
  listEstheticianAvailabilities(){

    this.appointmentService.getEstheticianAvailabilities(this.zipcode, this.date).subscribe(

      response => {
            this.availabilityList = this.appointmentService.convert(response);
            },
      error   => {
           console.log(error);
       });
  }

}
