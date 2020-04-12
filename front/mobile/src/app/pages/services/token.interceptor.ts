import { AuthenticationService } from 'src/app/pages/services/authentication.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor  implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
  
    const AuthHeaderString = this.authenticationService.getAuthenticatedToken();
    const email = this.authenticationService.getAuthenticatedUser();
    const clientId = this.authenticationService.getClientId();

    if(AuthHeaderString && email) { 
      request = request.clone({
        setHeaders : {
            Authorization : AuthHeaderString,
            clientId : clientId
          }
        }) ;
    }
    else if(clientId){
      request = request.clone({
        setHeaders : {
            clientId : clientId
          }
        }) ;
    }

    return next.handle(request);
  }
}