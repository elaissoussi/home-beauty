import { Component } from '@angular/core';

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
   //id : number = undefined;
   availabilityList : AvailabilityList = undefined;
   radioButtonValues = [] ;
   isChecked : boolean = false;
   //infoEsth = [];
    items:any=[];
    key:string="items";
    myDate:string= new Date().toISOString();

  constructor( private router : Router, private appointmentService : AppointementService,) {


  }
    
  
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
    
  if(this.radioButtonValues && this.isChecked==true)
  {
    console.log("id is: ",id)
    this.appointmentService.sendZipCodeAndDate(this.zipcode, this.date).subscribe(

      response => {
            
           console.log(response)
           this.router.navigate([`select-estheticians/${id}`]);
            },
      error   => {
           console.log(error);
       });
    
  }
   

 
 
  }

  
}
