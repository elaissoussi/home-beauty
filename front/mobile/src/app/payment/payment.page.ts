import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators,FormControl, AbstractControl } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

   cardHolderName:String;
	 cardType:String;
	 cardNumber:String;
	 cardExpirationDate:String;
	 cardCVC:String;

   myDate:string= new Date().toISOString();
  constructor(private paymentservice:PaymentService,private router:Router,public formBuilder : FormBuilder) {

   

   }

  payment() {

    this.paymentservice.payment(this.cardHolderName, this.cardType,this.cardNumber,this.cardExpirationDate,this.cardCVC)
    .subscribe(
      data => {
        console.log(data);
        //this.router.navigate(['home']);
      },
      error => {
        console.log(error);
    
      }
    )
  }

  ngOnInit() {
  }

}
