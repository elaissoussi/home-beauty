import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { homedir } from 'os';
import { Button } from 'protractor';
//import { BackgroundMode } from '@ionic-native/background-mode/ngx';
//import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthenticationService,
    private router:Router,
   // private backgroundMode: BackgroundMode
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     // this.backgroundMode.enable();
      this.authService.authentificationState.subscribe(state=>{

        console.log('Auth Changed: ',state);
        if(state){
          this.router.navigate(['menu','home']);
        }
        else {
          this.router.navigate(['menu/connecxion']);
          
        }
      });
    });
    
  }
}
