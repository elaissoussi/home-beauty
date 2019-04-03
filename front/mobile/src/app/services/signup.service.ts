import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from './../app.constants';
import {map} from 'rxjs/operators';

export const TOKEN = 'token'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  /*firstname: ['', Validators.required],
  lastname: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(6)]],
  email: ['',[ Validators.required, Validators.email]],
  phonenumber: ['', Validators.required],
  confirmPassword: ['', Validators.required],*/
  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(firstname,lastname, password,email,phonenumber) {

    return this.http.post<any>(
      `${API_URL}/customers/sign-up`,{
       firstname,
       lastname,
        password,
        email,
        phonenumber
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  
  }
}
