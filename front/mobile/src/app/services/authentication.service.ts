import { User } from './../user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from './../app.constants';
import { Observable } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  constructor(private http: HttpClient,private router: Router) { }

executeJWTAuthenticationService(username, password) {

  return this.http.post<any>(
    `${API_URL}/login`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
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
}
