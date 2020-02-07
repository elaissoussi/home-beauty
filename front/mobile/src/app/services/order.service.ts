import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonConvert } from "json2typescript"
import { API_URL } from './../app.constants';
import { OrderList } from '../models/OrderList';
import { Order } from '../models/Order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<any> {
    return this.httpClient.get(`${API_URL}/orders`);
  }

  getOrder(orderId: number): Observable<any> {
    return this.httpClient.get(`${API_URL}/orders/${orderId}`);
  }

  convert(JsonObject: any): OrderList {

    let jsonConvert: JsonConvert = new JsonConvert();
    let orderList: OrderList = undefined;

    try {
      orderList = jsonConvert.deserializeObject(JsonObject, OrderList);
    } catch (e) {
      console.log((<Error>e));
    }
    return orderList;
  }

  placeOrder(): Observable<any> {
    return this.httpClient.post<any>(`${API_URL}/checkout/placeOrder`,
      { observe: 'response' }).pipe(
        map(
          response => {
            return response;
          }
        )
      );
  }

  convertOrder(JsonObject: any): Order {

    let jsonConvert: JsonConvert = new JsonConvert();
    let order: Order = undefined;

    try {
      order = jsonConvert.deserializeObject(JsonObject, Order);
    } catch (e) {
      console.log((<Error>e));
    }
    return order;
  }




}
