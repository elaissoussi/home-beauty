import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { CartEntry } from '../models/CartEntry';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
 
  // cart 
  cart : Cart;

  // total cart
  total : number = 0;
 
  constructor(private cartService: CartService, private plt :Platform, private router: Router) {
    this.plt.ready().then(() => 
                {
                  this.cartService.getCart().subscribe(
                    response => {
                      this.cart = this.cartService.convert(response);
                      this.total = this.cartService.getTotalCart(this.cart); 
                    },
                    error => {
                      console.log(error);
                    }
                  );
                })
  }

  removeFromCart(entry : CartEntry){
    this.cartService.updateCart(entry.product, 0).subscribe(
      response => {
        this.cart = this.cartService.convert(response);
        this.total = this.cartService.getTotalCart(this.cart); 
      },
      error => {
        console.log(error);
      });
  }


  openappointment(){
    this.router.navigate(['appointment']);
  }
}
