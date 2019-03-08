import { Component, OnInit, Input } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-connecxion',
  templateUrl: './connecxion.page.html',
  styleUrls: ['./connecxion.page.scss'],
})
export class ConnecxionPage implements OnInit {

  constructor(private authService:AuthenticationService,private http :HTTP) { 

  }
  public email: string;
  public password: string;

  borderColor:string="#000000";
   /*login(){
    
   
    let url='http://localhost:8080/customers/login/';
    let authData={'email': this.email,'password': this.password};
    let headers = {
      'Content-Type': 'application/json'
     };
      this.http.setDataSerializer('json');

    if(this.email === undefined || this.password === undefined){
    
      this.borderColor='red';
      return;
    }
    else {
    
      this.borderColor='#000000';
 
     this.http.post(url,authData,headers).then(data=>{

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
        this.authService.login();
       
 
    })
    /*.catch(Erreur=>{
    console.log(Erreur.Erreur);
    alert("M OR E Incorrect");
    });*/
    
  //}
  sendPostRequest(){

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
  
    }
    
    logout(){
      this.authService.logout();
    }
  
  
  ngOnInit() {
  }

}
