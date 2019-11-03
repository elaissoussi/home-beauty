import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private http: HTTP,private authService:AuthenticationService,private storage: Storage) {

  }
  logout(){
    this.authService.logout();
  }
 



}
