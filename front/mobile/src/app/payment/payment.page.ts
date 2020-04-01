import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service'
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';

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

  constructor(private paymentservice: PaymentService, private router: Router, public formBuilder: FormBuilder,private popover:PopoverController) {}

  pay() {
    this.paymentservice.payment(this.cardHolderName, this.cardType, this.cardNumber, this.cardExpirationDate, this.cardCVC)
      .subscribe(
        data => {
          console.log(data);

          this.router.navigate([`/confirmation`]);
        },
        error => {
          console.log(error);
        }
      )
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
