import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/pages/services/authentication.service';
import { SignupService } from 'src/app/pages/services/signup.service';
import { Storage } from '@ionic/storage';
import { API_URL,AUTHENTICATED_USER, TOKEN } from 'src/app/app.constants';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
          { val: '9-10', isChecked: false },
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
          { val: '9-10', isChecked: false },
          { val: '9-10', isChecked: false }
    ]
    }
  ];



  public userId;
  showAvailibilities:boolean =true;
  constructor(private authservice : AuthenticationService, private storage: Storage,private router: Router,public http: HttpClient,
                private signupservice : SignupService
          ) {
    
      this.storage.get('idest').then((idesth) => {
        this.userId=idesth;
        console.log('Your Id is', idesth);
      });
  }



  

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
        this.signupservice.followedSignup(this.userId, estheticianAvailabilities)
        .subscribe(
          response => {
          console.log(response);
           // this.router.navigate(['home']);
            //this.invalidLogin = false;
          },
          error => {
            console.log(error);
           // this.invalidLogin = true;
           // alert("l\'email ou le mot de passe incorrect");
          }
        )
   

  }



  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

   
  zipCode:number;
  startHour:number;
  endHour:number;
  dayOfWeak:number;


  onSignUp() {
    
  
  this.signupservice.signupEsthZipcode(this.userId,this.zipCode)
      .subscribe(
        data => {
          console.log(data);
         // this.router.navigate(['home']);
        },
        error => {
          console.log(error);
      
        }
      )
    
    }
    
   
    showDaysAndTimes(){
      this.showAvailibilities=true;
    }
  

  ngOnInit() {
  }

}
