import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { API_URL, AUTHENTICATED_USER, SESSION_CART} from './../app.constants';

import {JsonConvert, Any} from "json2typescript"
import { Cart } from '../models/Cart';
import { CartEntry } from '../models/CartEntry';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(public storage: Storage, public httpClient:HttpClient) {}

  getCart(): Observable<Any>{
    return this.httpClient.get(`${API_URL}/cart`);
  }

  updateCart(product : Product, quantity : number) : Observable<Any> {
    return this.httpClient.post(`${API_URL}/cart/updateCart?service=${product.id}&quantity=${quantity}`,{});
  }

  getProductsCartNumber(cart : Cart) : number {
      var totalItems = 0 ; 
      if(cart && cart.entries)
      {
          cart.entries.forEach(e => {
          totalItems += e.quantity;
          });
      }
      return totalItems; 
  }

  getTotalCart(cart : Cart) : number{
    let totalCart = 0 ; 
    if(cart && cart.entries)
    {
        cart.entries.forEach(e => {
          totalCart += e.product.price * e.quantity ; 
        });
    }
    return totalCart; 
  }

  convert(cartJson : Any) : Cart{

        let jsonConvert : JsonConvert = new JsonConvert();        
        let cart: Cart;
        
        try {
            cart = jsonConvert.deserializeObject(cartJson, Cart);
        } catch (e) {
            console.log((<Error>e));
        }
        return cart;
  }

}
