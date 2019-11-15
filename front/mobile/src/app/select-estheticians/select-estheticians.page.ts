import { Component, OnInit, ViewChild } from '@angular/core';

import { AppointementService } from '../services/appointement.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { EstheticianList } from '../models/EstheticianList';
import { JsonConvert, Any } from "json2typescript";
//import { IonicSelectableComponent } from 'ionic-selectable';

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
 
  estheticianList: EstheticianList = undefined;
  jsonData : any = [];

  constructor(private appointement: AppointementService, private router: Router,
    private route: ActivatedRoute, private plt: Platform) {

      this.esthdisp();
  }

  
esthdisp(){
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

  console.log(this.estheticianList);
  this.jsonData=this.estheticianList;
  console.log(this.jsonData);
}

FilterJSONData(ev :any){
    this.esthdisp();
    const val = ev.target.value;
    const usersJson: any[] = Array.of(this.jsonData);
      if(val && val.trim() != ''){
            this.jsonData=usersJson.filter((item => {

              return JSON.stringify(item.firstName.toLowerCase().includes(val.toLowerCase()) > -1);
            //|| item.lastName.toLowerCase().indexOf(val.toLowerCase())>-1
            })
            )
      }
    this.jsonData = <any[]>JSON.parse(this.jsonData);

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

   

  

}
