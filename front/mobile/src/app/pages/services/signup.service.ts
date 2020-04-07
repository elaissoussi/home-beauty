import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
//import { Storage } from '@ionic/storage';
import { API_URL, AUTHENTICATED_USER, TOKEN} from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signupCust(password,firstName,lastName,phoneNumber){
    return this.http.post<any>(
      `${API_URL}/customers/sign-up`,
      {
       // email,
        password,
        firstName,
        lastName,
        phoneNumber
      }).pipe(
        map(
          response => {
           // sessionStorage.setItem(AUTHENTICATED_USER, email);
            // return to login page
            // sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return response;
          }
        )
      );
    
   
    }
  
  
    signupEsth(password,firstName,lastName,phoneNumber){

      
        return this.http.post<any>(
          `${API_URL}/estheticians/sign-up`,{
          
          //  email,
            password,
            firstName,
            lastName,
            phoneNumber
          }).pipe(
            map(
              data => {
                //sessionStorage.setItem(AUTHENTICATED_USER, email);
               // sessionStorage.setItem(ID_USER, );
               // return to login page
               // sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
              // sessionStorage.set('idEsth',data.id);

        
              //sessionStorage.setItem(TOKEN, data.headers.get('Authorization'));
             
                return data;
              
              }
            )
          );
        }
  
  
        signupEsthZipcode(userId,zipCode){
          /*let headers = new HttpHeaders().set('Content-Type', 'application/json');
           headers = headers.set('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmRvQGFiZG8uY29tIiwiZXhwIjoxNTY0OTY0MTUyfQ.tlMiM7FtL6sg-E0LiwiKVp8-o7RrjxbVyqs536r6OKfn-r0IVhysOSchilPUImEaK46QHOPDqn__JJOX_WySFQ');
           */
           return this.http.post<any>(
              `${API_URL}/addresses/${userId}`,{zipCode})
              .pipe(
                map(
                  data => {
                  console.log(data);
                    return data;
                  
                  }
                )
              );
  
             
            }
      
  
  
    

      followedSignup(id,avail){
        return this.http.post<any>(
          `${API_URL}/availabilities/${id}`,{avail})
        
          .pipe(
           map(

             data => {
                console.log(data);
                return data;
              
              },
           ));
         }

}
