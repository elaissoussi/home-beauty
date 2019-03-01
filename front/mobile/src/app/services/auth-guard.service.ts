import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthenticationService) {


   }



   canActivate():boolean {

    return this.authService.isAthenticated();

   }
}
