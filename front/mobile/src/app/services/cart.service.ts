import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export class Product{
    id : number;
    name: String;
    price : number;
    image : String;
}

export class Entry{
    product : Product;
    quantity: number;

    constructor(product: Product, quantity:number){
      this.product=product;
      this.quantity =quantity;
    };
}

export const SESSION_CART = 'session_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  constructor(public storage: Storage) {}

  getCart() : Promise<Entry[]> {
      
      return this.storage.get(SESSION_CART);
  }
  
  addToCart(product : Product, quantity : number) : Promise<any> {
      
    return this.storage.get(SESSION_CART).then((cart:Entry[]) => {
    
      if(cart)
      {
        var entryIndex = cart.findIndex( e => e != null && e.product.id == product.id);
        if(entryIndex > -1 )
        {
          var updateEntry = cart[entryIndex];
          updateEntry.quantity += quantity;
          cart[entryIndex] = updateEntry;
        }
        else
        {
          var newEntry = new Entry(product, quantity);
          cart.push(newEntry);
        }
        
        return this.storage.set(SESSION_CART, cart);

      }else
      {
        var firstEntry = new Entry(product, quantity);
        return this.storage.set(SESSION_CART, [firstEntry]);
      }

    });
  
    }

  removeFromCart(entryToRemove : Entry) : Promise<Entry[]>{
    return this.storage.get(SESSION_CART).then( (cart:Entry[]) => {
      if(cart){
        var newCart : Entry[] = [];
        cart.forEach(entry => {
          if(entryToRemove.product.id != entry.product.id){
            newCart.push(entry); 
          }
        });
        return this.storage.set(SESSION_CART, newCart);
      }
    });
  }

  getProductsCartNumber(cart:Entry[]) : number{
      var totalItems = 0 ; 
      if(cart)
      {
          cart.forEach(e => {
          totalItems += e.quantity;
          });
      }
      return totalItems; 
  }

  getTotalCart(cart:Entry[]) : number{
    var totalCart = 0 ; 
    if(cart)
    {
        cart.forEach(e => {
          totalCart += (e.product.price * e.quantity );
        });
    }
    return totalCart; 
  }

  removeCart(){
    this.storage.remove(SESSION_CART);
  }
}
