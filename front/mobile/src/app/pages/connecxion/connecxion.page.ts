import { Component, OnInit, Input } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { containerRefreshStart } from '@angular/core/src/render3';
import { EmailValidator } from '@angular/forms';

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
   login(){
    
   
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
 
     this.http.get(url,authData,headers).then(data=>{

       console.log(data.data)
        this.authService.login();
       
 
    })
    .catch(Erreur=>{
    console.log(Erreur.Erreur);
    alert("M OR E Incorrect");
    });
    
  }
   

  
  }
  ngOnInit() {
  }

}
