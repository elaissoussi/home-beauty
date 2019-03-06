import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';

const TOKEN_KEY="auth-token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
authentificationState = new BehaviorSubject(false);
  constructor(private storage: Storage,private plt :Platform) {
  this.plt.ready().then(()=>{
    this.checkToken();
  });

   }

   login(){

      return this.storage.set(TOKEN_KEY,'').then(res=>{

        this.authentificationState.next(true);

      } );
   }

   logout(){
    return this.storage.remove(TOKEN_KEY).then(()=>{

      this.authentificationState.next(false);

    } );
   }

   isAthenticated() {
    return this.authentificationState.value;
   }

   checkToken(){
    return this.storage.get(TOKEN_KEY).then(res=>{

      if(res){

        this.authentificationState.next(true);
      }


    } );
   }


   public register(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.lastname === null || credentials.mob === null || credentials.firstname === null) {
      return Observable.throw("S'il vous plaît insérer les informations d'identification");
    } else {
      // Stockés les infos dans backend
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
}
