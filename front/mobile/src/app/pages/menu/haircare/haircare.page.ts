import { Component, OnInit } from '@angular/core';
import {HaircaireService} from 'src/app/services/haircaire.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { CartService, Entry, Product } from 'src/app/services/cart.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-haircare',
  templateUrl: './haircare.page.html',
  styleUrls: ['./haircare.page.scss'],
})
export class HaircarePage {
 
// number of product in the cart
cartProductsNumber : number  = 0

// products 
products = [];

// slide config
 sliderConfig = {
  slidesPerView: 1.6,
  spaceBetween: 10,
  centeredSlides: true
};
  
  constructor(private haircare: HaircaireService, private cartService: CartService, private router: Router, private plt :Platform ) {
                
                this.plt.ready().then(() => 
                {
                  this.products = this.haircare.getProducts();
                  this.refreshCart()
                })
  }
  
  addProduct(product : Product)
  {
    this.cartService.addToCart(product, 1).then(()=> {
      this.refreshCart()
    });
  }

  refreshCart()
  {
    this.cartService.getCart().then(cart => {
      if(cart){
            this.cartProductsNumber = this.cartService.getProductsCartNumber(cart);
             }
    })
  }

  openCart() 
  {
   this.router.navigate(['cart']);
  }
  
}
