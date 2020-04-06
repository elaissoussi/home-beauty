import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { API_URL, AUTHENTICATED_USER, TOKEN} from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  

constructor(private http: HttpClient,private router: Router,private storage: Storage) {}

executeJWTAuthenticationService(email, password) {

  return this.http.post<any>(`${API_URL}/login`,{email,password}, { observe: 'response' })
                  .pipe(map(response => {
                        sessionStorage.setItem(AUTHENTICATED_USER, email);
                        sessionStorage.setItem(TOKEN, response.headers.get('Authorization'));
                       
                        return response;
                      }
                      )
                    );
}

isUserLoggedIn() {
  const user = sessionStorage.getItem(AUTHENTICATED_USER);
  const token = sessionStorage.getItem(TOKEN);

  return !(user === null) && !(token === null)
}

logout(){
  sessionStorage.removeItem(AUTHENTICATED_USER);
  sessionStorage.removeItem(TOKEN);
}

getAuthenticatedUser() {
  return sessionStorage.getItem(AUTHENTICATED_USER);
}

getAuthenticatedToken() {
  if(this.isUserLoggedIn()) {
    return sessionStorage.getItem(TOKEN);
  }
}

redirectLogedUser(){
  if(this.isUserLoggedIn())
  this.router.navigate(['home']);
}


signuo = () => {
  
}
}
