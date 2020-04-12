import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PaymentService } from 'src/app/pages/services/payment.service'
import { PopoverController,Platform } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';
import { OrderService } from 'src/app/pages/services/order.service';
import { Order } from 'src/app/pages/customers/models/Order';
import { CartService } from 'src/app/pages/services/cart.service';
import { Cart } from 'src/app/pages/customers/models/Cart';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {

  cardHolderName: String;
  cardType: String;
  cardNumber: String;
  cardExpirationDate: String;
  cardCVC: String;
  myDate: string = new Date().toISOString();
  public order: Order;
  public cart: Cart;

  affcon =false;

  constructor(private paymentservice: PaymentService, 
            private router: Router, 
            public formBuilder: FormBuilder,
            private popover:PopoverController,
            private orderService: OrderService,
            private cartService: CartService,
            private plt: Platform
            ) {

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

  pay() {
    
    this.paymentservice.payment(this.cardHolderName, this.cardType, this.cardNumber, this.cardExpirationDate, this.cardCVC)
      .subscribe(
        data => {
          console.log(data);
          this.affcon=true;
         //this.router.navigate([`/confirmation`]);
       
        },
        error => {
          console.log(error);
        }
      )
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


 /* affconfirmation(){
      this.affcon=true;
      console.log(this.affcon)
  }*/



  async OpenPopover(ev:Event){
    const popver = await this.popover.create({
      component: PopoverPage,
      event: ev,
      translucent: true
     
    });
    popver.present();

  }

}
