import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  public pages = [
      {
        title:'Acceuil',
        url:'/home'
      },
      /*{
        title:'Coiffure',
        url:'/home/haircare'
      },*/
      {
        title:'Mon compte',
        url:'/home/aide'
      },
      {
        title:'Mes Commandes',
        url:'/order-list'
      },
      {
        title:'Aide',
        url:'/home/aide'
      }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthenticationService,
    private router: Router) {
    this.initializeApp();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
 
  initializeApp() {
    
    
  }
}
