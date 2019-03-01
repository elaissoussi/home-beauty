import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   customer1 = [
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
];
  

  constructor(private http: HTTP,private authService:AuthenticationService) {


  }

 /* sendPostRequest(){

    let postData = {
      "email": "abdo@gmail.com",
      "password": "ahmed",
      "firstName": "ahmed",
      "lastName": "khdime",
      "phoneNumber": "0612344444456789"
  };

  let headers = {
    'Content-Type': 'application/json'
   };
    this.http.setDataSerializer('json');

  this.http.get('http://localhost:8080/customers/1',{} ,{})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }*/
  
  logout(){
    this.authService.logout();
  }

}
