import { Component, OnInit, ViewChild } from '@angular/core';

import { AppointementService } from '../services/appointement.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { EstheticianList } from '../models/EstheticianList';
import { JsonConvert, Any } from "json2typescript";
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public firstName: string;
  public lastName:string;
}
@Component({
  selector: 'app-select-estheticians',
  templateUrl: './select-estheticians.page.html',
  styleUrls: ['./select-estheticians.page.scss'],
})


export class SelectEstheticiansPage {
  ports: Port[];
  port: Port;
//@ViewChild('myselect') selectComponent:IonicSelectableComponent;
  estheticianList: EstheticianList = undefined;
 estId=[];
 esth=null;
 
  constructor(private appointement: AppointementService, private router: Router,
    private route: ActivatedRoute, private plt: Platform,private toastCtrl:ToastController) {

      this.ports=[
        {
          id:1,
          firstName:'ESTH1',
          lastName:'ESTH1'
        },
        {
          id:2,
          firstName:'ESTH2',
          lastName:'ESTH2'
        },
        {
          id:3,
          firstName:'ESTH3',
          lastName:'ESTH3'
        }
     ]

      console.log(this.estheticianList)

    this.plt.ready().then(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.appointement.getEstheticianAvailabilitiesTime(id).subscribe(

        response => {
          this.estheticianList = this.convert(response);
        },
        error => {
          console.log(error);
        }
      );

    })

 
  }

  

  convert(estheticianJSON: Any): EstheticianList {

    let jsonConvert: JsonConvert = new JsonConvert();
    let estheticianList: EstheticianList = undefined;

    try {
      estheticianList = jsonConvert.deserializeObject(estheticianJSON, EstheticianList);
    } catch (e) {
      console.log((<Error>e));
    }
    return estheticianList;
  }

  openPayment(){
    
  
    this.router.navigate([`/payment`]);
 
  
  
   }

   esthChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('Esthetician:', event.value);
  }

  onClose () {
    let toast = this.toastCtrl.create({
      message:'Merci pour la selection',
      duration:2000
    });
    //toast.present();

  }

}
