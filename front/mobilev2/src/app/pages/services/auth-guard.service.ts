import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService: AuthenticationService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }
}
