import { Component, OnInit } from '@angular/core';
//import  Appo  from '../appointment';
import { AppointementService } from '../services/appointement.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EstheticianList } from '../models/EstheticianList';
import {JsonConvert, Any} from "json2typescript"
@Component({
  selector: 'app-select-estheticians',
  templateUrl: './select-estheticians.page.html',
  styleUrls: ['./select-estheticians.page.scss'],
})


export class SelectEstheticiansPage implements OnInit {

  items:any=[];
  key:string="items";
  esths = [];
  event : any;

  constructor(private storage: Storage,private appointement : AppointementService,private router:Router,
    private route: ActivatedRoute,private plt :Platform) {
      
      this.plt.ready().then(() => 
      {
       let id  = this.route.snapshot.paramMap.get('id')
        this.appointement.getEstheticianAvailabilitiesTime(id).subscribe(

          response => {

            console.log(response);
           // this.cart = this.cartService.convert(response);
            //this.total = this.cartService.getTotalCart(this.cart); 
            console.log('Your convert :',this.convert(response))
          },
          error => {
            console.log(error);
          }
        );
      })

  //console.log(this.router.url)
  //console.log(this.route.snapshot.paramMap.get('id'));
   
  }
   loadEsth = () => {
   

    
   }


   openSelectEsth(id:string){
    
    // if(this.radioButtonValues){
        
 
  this.appointement.getEstheticianAvailabilitiesTime(id).subscribe(
 
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
 
     
      this.router.navigate(['select-estheticians']);*/
    //}

    //this.getValue= this.router.snapshot.paramMap.get("item") 
   }

   convert(estheticianJSON : Any) : EstheticianList{

    let jsonConvert : JsonConvert = new JsonConvert();        
    let estheticianList: EstheticianList;
    
    try {
      estheticianList = jsonConvert.deserializeObject(estheticianJSON, EstheticianList);
    } catch (e) {
        console.log((<Error>e));
    }
    return estheticianList;

}

  ngOnInit() {



  }

}
