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
  showAvailibilities:boolean =true;
  constructor(private authservice : AuthenticationService,
    private storage: Storage,private router: Router,
    public http: HttpClient,

    ) {
    
      this.storage.get('idest').then((idesth) => {
        this.userId=idesth;
        console.log('Your Id is', idesth);
      });
  }

  //idEsthetic:number = idesthetician;
public pro;

/*sendAvailabilities2() {
    
  let estheticianAvailabilities =[];
  for (var availability of this.availabilities) {
    for( var hour of availability.hours){
    if(hour.isChecked){
    var av = {"dayOfWeak" :availability.id , "startHour" : hour.val.substring(0,1),"endHour" : hour.val.substring(2)};
    estheticianAvailabilities.push(av);
          }
        }
    }

  this.authservice.sendAvailabilities(estheticianAvailabilities)
      .subscribe(
        data => {
          console.log(data);
          //this.router.navigate(['home']);
        },
        error => {
          console.log(error);
      
        }
      )
    }*/

  sendAvailabilities() {

          console.log("hfhhhfhfh");
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
      headers = headers.set('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmRvQGFiZG8uY29tIiwiZXhwIjoxNTY0OTY0MTUyfQ.tlMiM7FtL6sg-E0LiwiKVp8-o7RrjxbVyqs536r6OKfn-r0IVhysOSchilPUImEaK46QHOPDqn__JJOX_WySFQ');

      console.log(estheticianAvailabilities);
      
      return this.http.post<any>(
        `${API_URL}/availabilities/229376`,{estheticianAvailabilities},{headers})
      
        .subscribe(
         
            data => {
              console.log(this.userId);
              return data;
            
            },
            error => {
              console.log(error);
          
            }
          
        );
   

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
    
  /*
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
      */
    }
    
   
    showDaysAndTimes(){
      this.showAvailibilities=true;
    }
  

  ngOnInit() {
  }

}
