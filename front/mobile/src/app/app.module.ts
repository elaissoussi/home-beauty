import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';

const config = {
		apiKey: "AIzaSyAmJNzde8RFV1dDl4lD5mJ40THGN45bE_Y",
		authDomain: "home-beauty-9f4a5.firebaseapp.com",
		databaseURL: "https://home-beauty-9f4a5.firebaseio.com",
		//projectId: "home-beauty-9f4a5",
		storageBucket: "home-beauty-9f4a5.appspot.com",
		messagingSenderId: "141748453462"
	  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  AngularFireModule.initializeApp(config.firebase)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
