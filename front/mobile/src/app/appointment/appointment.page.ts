import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointementService } from '../services/appointement.service';
import { AvailabilityList } from '../models/AvailabilityList';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
   
export class AppointmentPage {
 
   zipcode : number = undefined ;
   date : Date = undefined;
   //id : number = undefined;
   availabilityList : AvailabilityList = undefined;
   radioButtonValues = [] ;
   //infoEsth = [];
    items:any=[];
    key:string="items";

  constructor(private http : HttpClient,
              private router : Router,
              private appointmentService : AppointementService,
              private storage: Storage) {}
    
  
  listEstheticianAvailabilities(){

    this.appointmentService.getEstheticianAvailabilities(this.zipcode, this.date).subscribe(

      response => {
            this.availabilityList = this.appointmentService.convert(response);
           console.log(response)
            },
      error   => {
           console.log(error);
       });
  }

  openSelectEsth(id:number){
    
  
   this.router.navigate([`select-estheticians/${id}`]);

 
 
  }

  
}
