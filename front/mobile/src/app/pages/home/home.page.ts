import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HTTP) {


  }

  sendPostRequest(){

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
    this.http.get('http://localhost:8080/customers', {},{})
  .then(data => {
    var response = JSON.parse(data.data);
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);
    console.log(response);

  })
  .catch(error => {

    console.log(error);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }
  


}
