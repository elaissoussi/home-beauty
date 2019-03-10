import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class HaircaireService {
   
  apiRootUrl : string = 'http://localhost:8080';
  results    : Array<any> = [];
  loading    : boolean = false ; 

  constructor(private http : HTTP) {}

  getHaircaireServices(){
   
    let apiUrl = this.apiRootUrl + '/services/type/HAIR';

    this.http.get(apiUrl, {}, {})
              .then(response => {
                this.results = JSON.parse(response.data);
                this.loading = false;                
              })
              .catch(error => {
                console.log(error.error);            
              });
  }

}
