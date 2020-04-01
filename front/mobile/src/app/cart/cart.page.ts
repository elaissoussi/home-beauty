import { Component, OnInit } from '@angular/core';
import { Platform, PopoverController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { CartEntry } from '../models/CartEntry';
import { PopoverPage } from '../popover/popover.page';


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
 
  constructor(private cartService: CartService, private plt :Platform, private router: Router,private popover:PopoverController) {
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

  async OpenPopover(ev:Event){
    const popver = await this.popover.create({
      component: PopoverPage,
      event: ev,
      translucent: true
     
    });
    popver.present();

  }
}
