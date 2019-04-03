import { Component, OnInit, Input } from '@angular/core';
import { AuthGuardService } from './../../services/auth-guard.service';
import { AuthenticationService } from '../../services/authentication.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class loginPage implements OnInit {
  email:String ;
  password:String ;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }
  

  borderColor:string="#000000";
  handleJWTAuthLogin() {
    this.authenticationService.executeJWTAuthenticationService(this.email, this.password)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['home']);
            this.invalidLogin = false;
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        )
  }
  ngOnInit() {
    this.authenticationService.RedirectLogedUser();
  }

}
