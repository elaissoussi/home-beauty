import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthenticationService } from 'src/app/pages/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router,private http: HTTP,private authService:AuthenticationService) {

  }

  logout(){
    this.authService.logout();
  }
 
  customer(){
    this.router.navigate([`/service`]);
  }

  estheticien(){
   // this.router.navigate([`.././pages/signup`]);
  }
}
