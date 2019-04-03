import { Component, OnInit } from '@angular/core';
import {HaircaireService} from 'src/app/services/haircaire.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-haircare',
  templateUrl: './haircare.page.html',
  styleUrls: ['./haircare.page.scss'],
})
export class HaircarePage implements OnInit {
 cart=[];
 items=[];

 sliderConfig = {
  slidesPerView: 1.6,
  spaceBetween: 10,
  centeredSlides: true
};
  
  constructor(private haircare: HaircaireService,private cartService: HaircaireService,private router:Router) {}
  selectedItems = [];
  ngOnInit() {
    
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  removeFromCart(product) {
   
    this.cartService.removeProduct(product);
  }
 
  openCart() {
   this.router.navigate(['cart']);
  }
  
}
