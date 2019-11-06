import { Component, OnInit } from '@angular/core';

import { AppointementService } from '../services/appointement.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EstheticianList } from '../models/EstheticianList';
import {JsonConvert, Any} from "json2typescript";

//import { Esthetician  } from '../models/Esthetician'
@Component({
  selector: 'app-select-estheticians',
  templateUrl: './select-estheticians.page.html',
  styleUrls: ['./select-estheticians.page.scss'],
})


export class SelectEstheticiansPage implements OnInit {

  items:any=[];
 
  esths = [];
  event : any;
  estheticianList: EstheticianList = undefined;
  evilResponseProps:any;
  objectKeys = Object.keys;
  constructor(private appointement : AppointementService,private router:Router,
    private route: ActivatedRoute,private plt :Platform) {
      
      this.plt.ready().then(() => 
      {
       let id  = this.route.snapshot.paramMap.get('id')
       let id2 = parseInt(id)
      
        this.appointement.getEstheticianAvailabilitiesTime(id2).subscribe(

          response => {

            console.log(response);
        
            this.estheticianList = this.convert(response);
            console.log('rrr :',this.estheticianList)
            //this.evilResponseProps=Object.keys(this.estheticianList)
             //this.evilResponseProps = Object.keys(this.estheticianList);
            console.log('Your convert :',this.convert(response))
           // console.log('Your Evil :',this.evilResponseProps)
          // return Object.keys(this.estheticianList)
          },
          error => {
            console.log(error);
          }
        );
        
      })

   
  }
   loadEsth = () => {
   

    
   }


  

   convert(estheticianJSON : Any) : EstheticianList{

    let jsonConvert : JsonConvert = new JsonConvert();        
    let estheticianList: EstheticianList=undefined;
    
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
