import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { API_URL, TOKEN } from './../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient, private storage: Storage) {


  }


  payment(cardHolderName, cardType, cardNumber, cardExpirationDate, cardCVC) {
    return this.http.post<any>(
      `${API_URL}/checkout/addPaymentInfo`,
      {
        cardHolderName,
        cardType,
        cardNumber,
        cardExpirationDate,
        cardCVC
      }, { observe: 'response' }).pipe(
        map(
          response => {
            return response;
          }
        )
      );


  }
}
