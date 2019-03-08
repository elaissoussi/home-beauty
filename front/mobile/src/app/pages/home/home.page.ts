import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 /*  customer1 = [
     {
    "email" : "abdo@gmail.com",
    "password" : "abdo",
    "firstName" : "abdo",
    "lastName" : "khdime",
    "phoneNumber" : "06123456789",
    "_links" : {
      "self" : {
        "href" : "http://localhost:8080/customers/1"
      },
      "customer" : {
        "href" : "http://localhost:8080/customers/1"
      }
    }
  }
];*/
  
  

  constructor(private http: HTTP,private authService:AuthenticationService) {


  }

 /*sendPostRequest(){

  // server url
  let url = 'http://localhost:8080/customers/login';

  // authentification data 
  let authData = {"email":"monsif@gmail.com","password":"monsif"};

  // content type
  let headers = {
    'Content-Type': 'application/json'
   };

  // DataSerializer
  this.http.setDataSerializer('json');
  
  // send request to server 
  this.http.post(url, authData, headers)
  .then(data => {

    console.log(data.status);
    console.log(data.data); 
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error);
    console.log(error.error);
    console.log(error.headers);

  });
<<<<<<< HEAD
  }*/
  //public hideMe = false;
//}
//=======

  
  
//>>>>>>> 5ce9ed1d96925a62d9a938793b5d869ba61a7bab
  logout(){
    this.authService.logout();
    
  }



}
