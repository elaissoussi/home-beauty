import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';
import { Platform, PopoverController } from '@ionic/angular';
import { PopoverPage } from 'src/app/popover/popover.page';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage {

  public order: Order;
  public cart: Cart;

  constructor(private orderService: OrderService,
    private cartService: CartService,
    private plt: Platform,private popover:PopoverController) {

    this.plt.ready().then(() => {
      this.cartService.getCart().subscribe(
        response => {
          this.cart = this.cartService.convert(response);
        },
        error => {
          console.log(error);
        }
      );
    })
  }

  placeOrder() {
    this.orderService.placeOrder().subscribe(
      response => {
        this.order = this.orderService.convertOrder(response);
        console.log(this.order);
      },
      error => {
        console.log(error);
      }
    );
  };

  async OpenPopover(ev:Event){
    const popver = await this.popover.create({
      component: PopoverPage,
      event: ev,
      translucent: true
     
    });
    popver.present();

  }

}
