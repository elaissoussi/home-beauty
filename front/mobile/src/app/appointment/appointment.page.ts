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
    
   // if(this.radioButtonValues){
       

 /*this.appointmentService.getEstheticianAvailabilitiesTime(id).subscribe(

response => {
  this.items=response;
  console.log(this.items);
 // this.availabilityList = this.appointmentService.convert(response);
  this.storage.set(this.key,JSON.stringify(this.items));
})
     /* this.http.get(`http://localhost:8080/estheticians/availability/${$event}`)
       .subscribe(res=>{
         this.items=res;
       console.log($event);
        console.log(this.items);
        this.storage.set(this.key,JSON.stringify(this.items));
        
     })

    
    */
   //}
   this.router.navigate([`select-estheticians/${id}`]);

  // this.router.navigate(['/select-estheticians'], { queryParams: { id : id } }); 
 
  }

  getesth = () => {
    this.storage.get(this.key).then((val) => {
      if(val!=null && val != undefined){
       this.items=JSON.parse(val)
        console.log('Your info is', this.items);
        
      }
      
    });
  }
}
