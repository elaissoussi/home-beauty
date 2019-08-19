import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

import { API_URL, AUTHENTICATED_USER, TOKEN} from './../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signupCust(email,password,firstName,lastName,phoneNumber){
    return this.http.post<any>(
      `${API_URL}/customers/sign-up`,
      {
        email,
        password,
        firstName,
        lastName,
        phoneNumber
      }).pipe(
        map(
          response => {
            sessionStorage.setItem(AUTHENTICATED_USER, email);
            // return to login page
            // sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return response;
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
               // sessionStorage.setItem(ID_USER, );
               // return to login page
               // sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
               sessionStorage.set('idEsth',data.id);
                return data;
              
              }
            )
          );
        }
  
  
        signupEsthZipcode(zipCode,userId){
        
          let headers = new HttpHeaders().set('Content-Type', 'application/json');
           headers = headers.set('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmRvQGFiZG8uY29tIiwiZXhwIjoxNTY0OTY0MTUyfQ.tlMiM7FtL6sg-E0LiwiKVp8-o7RrjxbVyqs536r6OKfn-r0IVhysOSchilPUImEaK46QHOPDqn__JJOX_WySFQ');
            
          return this.http.post<any>(
              `${API_URL}/addresses/${userId}`,{zipCode,userId},{headers})
              .pipe(
                map(
                  data => {
                  
                    return data;
                  
                  }
                )
              );
  
             
            }
      
  
  
            sendAvailabilities(esthAvai) {
  
              
          
          let headers = new HttpHeaders().set('Content-Type', 'application/json');
          headers = headers.set('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaG1hZEBhaG1hZC5jb20iLCJleHAiOjE1NjUxMzQ0MDJ9.eWYoqJ114Ci5JEiw41oKgNoer9e-sSbgazNT0poAkEIfDrf38F6OT8WSaj2Civg1yMsuyjJUv_63XZciF-EzIg');
    
          console.log(esthAvai);
          
          return this.http.post<any>(
            `${API_URL}/availabilities/229376`,{esthAvai},{headers})
          
            .pipe(
              map(
                data => {
                 
                  return data;
                
                }
              )
            );
       
    
      }
}
