import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointementService } from '../services/appointement.service';
import { API_URL } from './../app.constants';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EstheticianList } from '../models/EstheticianList';
import { JsonConvert, Any } from "json2typescript";



@Component({
  selector: 'app-select-estheticians',
  templateUrl: './select-estheticians.page.html',
  styleUrls: ['./select-estheticians.page.scss'],
})


export class SelectEstheticiansPage {
 
  estheticianList: EstheticianList = undefined;
  

  constructor(private appointement: AppointementService, private router: Router,
    private route: ActivatedRoute, private plt: Platform,private http: HttpClient) {

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


}

FilterJSONData(ev :any){
   
let searchValue : string = ev.target.value;

    if(searchValue == null) {
      return ;
    }
    console.log(searchValue);
    if(searchValue == "") {
 
      
       return this.esthdisp();
    }

    let items = this.estheticianList.estheticianlist.filter((item => {
      return (item.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
      }));

   console.log(items);
   this.estheticianList.estheticianlist = items;
   
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

  openPayment(id:number){

    this.http.post<any>(`${API_URL}/checkout//addEsthetician/${id}`,{id})
    .subscribe(
      response => {
            
        console.log(response)
     
         },
      error   => {
        console.log(error);
    });
    
    
    this.router.navigate([`/payment/${id}`]);
  
   }

   

  

}
