import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';
import { API_URL } from 'src/app/app.constants';
import {map} from 'rxjs/operators';
import { isDeepStrictEqual } from 'util';
import { Route, Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-followed-signup',
  templateUrl: './followed-signup.page.html',
  styleUrls: ['./followed-signup.page.scss'],
})
export class FollowedSignupPage implements OnInit {

  public availabilities = [
    {
      id: 1,
      Days: 'Lundi',
      //expanded: true,
      hours : [ 
          { val: '7-8', isChecked: false },
          { val: '8-9', isChecked: false },
          { val: '9-10', isChecked: false }
    ]
    },
    {
      id: 2,
      Days: 'Mardi',
      //expanded: true,
      hours: [ 
          { val: '7-8', isChecked: false },
          { val: '8-9', isChecked: false },
          { val: '9-10', isChecked: false }
    ]
    }
  ];



  public userId;
  showTimes:boolean =false;
  constructor(private authservice : AuthenticationService,
    private storage: Storage,private router: Router,
    private http: HttpClient,

    ) {
    
   this.storage.get('idEsth').then((idest) => {
     this.userId=idest;
    console.log('Your Id is', idest);
  });
  }

  //idEsthetic:number = idesthetician;
public pro;

  sendAvailabilities() {
    let estheticianAvailabilities =[];
    for (var availability of this.availabilities) {
      for( var hour of availability.hours){
      if(hour.isChecked){
       var av = {"dayOfWeak" :availability.id , "startHour" : hour.val.substring(0,1),"endHour" : hour.val.substring(2)};
       estheticianAvailabilities.push(av);
      }
    }
 }

 let headers = new HttpHeaders().set('Content-Type', 'application/json');
 headers = headers.set('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmRvQGFiZG8uY29tIiwiZXhwIjoxNTYzMTQ3NjYwfQ.zQVjR1g67FzSIRGuCMVrWeUQGaYe2s9z69s5mKO-2Qxs-PLNsOkbYYof4zU22_69mmO9FI7JTtXEP4qy5mzg_w');
 console.log(estheticianAvailabilities);
 return this.http.post<any>(
   `${API_URL}/availabilities/${this.userId}`,{estheticianAvailabilities},{headers})
 
   .pipe(
     map(
       data => {
        console.log(this.userId);
         return data;
       
       }
     )
   );
   

  }


  signUpEsthDaysTime (userId) {
  
  }


  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  /*
 */
 

   
  zipCode:number;
  startHour:number;
  endHour:number;
  dayOfWeak:number;


  onSignUp() {
    
  
  this.authservice.signupEsthZipcode(this.zipCode,this.userId)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
      
        }
      )
    }
    
   
    showDaysAndTimes(){
      this.showTimes=true;
    }
  

  ngOnInit() {
  }

}
