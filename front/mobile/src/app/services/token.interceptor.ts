import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor  implements HttpInterceptor{

  constructor(
// tslint:disable-next-line: no-shadowed-variable
    private AuthenticationService: AuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
  
    const AuthHeaderString = this.AuthenticationService.getAuthenticatedToken();
    const email = this.AuthenticationService.getAuthenticatedUser()

    if(AuthHeaderString && email) { 
      request = request.clone({
        setHeaders : {
            Authorization : AuthHeaderString
          }
        }) ;
    }
    return next.handle(request);
  }
}