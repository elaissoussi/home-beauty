import { User } from './../user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from './../app.constants';
import { Observable } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'
export const ID_USER = 'id_user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  constructor(private http: HttpClient,private router: Router,private storage: Storage) { }

  
  // Change to this http://ed43bb3b.ngrok.io/api/register
  
  access: boolean;
  token: string= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYWFAZmZmIiwiZXhwIjoxNTYxMjQ3NTQ5fQ.4-y2qg-7Esy2INe3Sra0WSqXiNBruQowFeHl6nCpTEL8YM2hMS0umhTtbzpCZDgjjgVhsObY-3ptpMEpE8OGuQ';
  customer:boolean;
  esthetician:boolean;

executeJWTAuthenticationService(email, password) {

  return this.http.post<any>(
    `${API_URL}/login`,{
    
      email,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, email);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );

}



isUserLoggedIn() {
  const user = sessionStorage.getItem(AUTHENTICATED_USER);
  return !(user === null);
}

logout(){
  sessionStorage.removeItem(AUTHENTICATED_USER);
}

getAuthenticatedUser() {
  return sessionStorage.getItem(AUTHENTICATED_USER);
}

getAuthenticatedToken() {
  if(this.getAuthenticatedUser()) {
    return sessionStorage.getItem(TOKEN);
  }
}
RedirectLogedUser(){
  if(this.isUserLoggedIn())
  this.router.navigate(['home']);

}

signupCust(email,password,firstName,lastName,phoneNumber){
//http://localhost:8080/customers/sign-up
//http://localhost:8080/estheticians/sign-up

  return this.http.post<any>(
    `${API_URL}/customers/sign-up`,{
    
      email,
      password,
      firstName,
      lastName,
      phoneNumber
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, email);
        
          //sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  
 
  }


  signupEsth(email,password,firstName,lastName,phoneNumber){
    //http://localhost:8080/customers/sign-up
    //http://localhost:8080/estheticians/sign-up
    
      return this.http.post<any>(
        `${API_URL}/estheticians/sign-up`,{
        
          email,
          password,
          firstName,
          lastName,
          phoneNumber
        }).pipe(
          map(
            data => {
              sessionStorage.setItem(AUTHENTICATED_USER, email);
              
            //  sessionStorage.setItem(ID_USER, );
             // sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
               this.storage.set('idEsth',data.id);
              return data;
            
            }
          )
        );
      }


      signupEsthZipcode(zipcode,idesthetician){
        //http://localhost:8080/customers/sign-up
        //http://localhost:8080/estheticians/sign-up
        //${API_URL}/estheticians/zipcode/${zipcode}
        
          return this.http.post<any>(
            `${API_URL}/estheticians/zipcode`,{
            
              zipcode,
              idesthetician
            }).pipe(
              map(
                data => {
                
                  return data;
                
                }
              )
            );
          }
}
