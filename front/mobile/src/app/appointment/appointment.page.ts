import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { API_URL } from './../app.constants';
import { AuthenticationService } from '../services/authentication.service';
import { map } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs/Observable';
import { AppointementService } from '../services/appointement.service';
import { Headers, Http } from '@angular/http';  
import { empty } from 'rxjs';
//import { NavController, NavParams } from '@ionic/angular';

@Component({

  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
   
export class AppointmentPage implements OnInit {
   showComp=false;
   zipcode:number ;
   dateaccessibilty:Date;
   zipc: Observable<any>;


  constructor(private http: HttpClient,private router: Router,
    private authenticationService: AuthenticationService,private appService: AppointementService) { 
    
    }
    results: Observable<any>;
    url = `${API_URL}/estheticians/`;
    infodata =[];
    //infodata2=[][];
  showEsth(){

    
    //console.log(zipcode);
         let headers = new HttpHeaders().set('Content-Type', 'application/json');
         headers = headers.set('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlc3RoZXRpY2lhbkBnbWFpbC5jb20iLCJleHAiOjE1NjAxMjMwMTh9.42luPEyReEdTO1PflbP4DG7G_U0DNsdGB8KZHTYZvra5rtJf7b1W-NopdaIFc0oopyTD8D1hQgLt7IL1ifCmtw');
         
         this.showComp=true;
         this.zipc = this.http.get<any>(`${API_URL}/estheticians/zipcode/${this.zipcode}/date/01-01-2019`,{headers});
         this.zipc
          .subscribe(data => {
            this.infodata= data;
           let map = new Map([data]);
            console.log('my data: ',map); 
            //this.infodata2=(Object.values(this.infodata));
            //let mykey = Object.keys(this.infodata);
           // return this.infodata;
          });
       
  }
  
  ngOnInit() {
  }

}
