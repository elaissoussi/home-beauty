import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { HomePage } from './pages/menu/home/home.page';
import { homedir } from 'os';
import { Button } from 'protractor';
//import { BackgroundMode } from '@ionic-native/background-mode/ngx';
//import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public hor = [
    { val: '7-8', isChecked: true },
    { val: '8-9', isChecked: false },
    { val: '9-10', isChecked: false }
  ];

  public pages = [
      {
        title:'Acceuil',
        url:'/home'
      },
      {
        title:'Aide',
        url:'/home/aide'
      },
      {
        title:'Paiment',
        url:'/home/paiment'
      },
      {
        title:'Paramètres',
        url:'/home/parametres'
      },
      {
        title:'Coiffure',
        url:'/home/haircare'
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
