import { Component, OnInit } from '@angular/core';
import { HaircaireService } from '../services/haircaire.service';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Platform } from '@ionic/angular';
//import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { Jsonp } from '@angular/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  selectedItems = [];
 
  total = 0;
 
  constructor(private cartService:HaircaireService,private calendar:Calendar,private plt :Platform) {

   

   }

   displayCalendar(){
   this.calendar.createCalendar('MyCalendar').then(
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
  );
}

   removeFromCart(product) {
   
    this.cartService.removeProduct(product);

  }
   
  
   
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
      
  }
  this.selectedItems = Object.keys(selected).map(key => selected[key])
  this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
}
  
  

}
