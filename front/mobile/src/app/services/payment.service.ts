import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { API_URL,TOKEN} from './../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
email:String
  constructor(private http: HttpClient,private storage: Storage) { 

    storage.get('em').then((val) => {
      this.email =val;
      console.log('Your email is', val);
    });
  }
 

  payment(cardHolderName,cardType,cardNumber,cardExpirationDate,cardCVC){
    return this.http.post<any>(
      `${API_URL}/checkout/addPaymentInfo?customer=${this.email}`,
      {
        cardHolderName,
        cardType,
        cardNumber,
        cardExpirationDate,
        cardCVC
      },{ observe: 'response' }).pipe(
        map(
          response => {
            console.log("info :",response)
            console.log('Your email issss', this.email);

            sessionStorage.setItem(TOKEN, response.headers.get('Authorization'));
            return response;
          }
        )
      );
    
   
    }
}
