import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CartService, Entry } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
 
  // cart items
  cart : Entry[] = [];

  // total cart
  total : number = 0;
 
  constructor(private cartService: CartService, private plt :Platform, private router: Router) {
    this.plt.ready().then(() => 
                {
                  this.cartService.getCart().then((cart : Entry[]) => {
                    if(cart){
                      this.cart = cart;
                      this.total = this.cartService.getTotalCart(cart); 
                     }
                  });
                })
  }

  removeFromCart(entry : Entry){
    this.cartService.removeFromCart(entry).then((cart : Entry[])=> {
      this.cart = cart;
      this.total = this.cartService.getTotalCart(cart); 
    })
  }

  removeCart(){
    this.router.navigate(['home']);
    this.cartService.removeCart();
  }

  openappointment(){
    this.router.navigate(['appointment']);
  
  }
}
