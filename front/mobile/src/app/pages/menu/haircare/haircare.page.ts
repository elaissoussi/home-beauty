import { Component } from '@angular/core';
import { HaircaireService } from 'src/app/services/haircaire.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Platform } from '@ionic/angular';
import { Product } from 'src/app/models/Product'
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-haircare',
  templateUrl: './haircare.page.html',
  styleUrls: ['./haircare.page.scss'],
})
export class HaircarePage {
 
// number of product in the cart
  cartProductsNumber : number  = 0

// products 
  products : Category[] = undefined;

// slide config
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  
  constructor(private haircareService: HaircaireService, 
              private cartService: CartService, 
              private router: Router, 
              private plt :Platform ) {
                
                this.plt.ready().then(() => 
                {

                  this.haircareService.getHaircaireProducts().subscribe(
                    response => {
                                 this.products = this.haircareService.convert(response).categories;
                                 this.refreshCart()
                                },
                    error    => {
                                    console.log(error);
                                });
                
                });
  }
  
  // add product to cart
  addProduct(product : Product)
  {
    this.cartService.updateCart(product, 1).subscribe(
      response => 
      {
        let cart = this.cartService.convert(response);
        this.cartProductsNumber = this.cartService.getProductsCartNumber(cart);
      },
      error => 
      {
        console.log(error);
      }
    );
  }

  // Refresh cart after modification
  refreshCart()
  {
    this.cartService.getCart().subscribe(
      response => 
      {
        let cart = this.cartService.convert(response);
        this.cartProductsNumber = this.cartService.getProductsCartNumber(cart);
      },
      error => 
      {
        console.log(error);
      }
    );
  }

  // redirect to cart page
  openCart() 
  {
   this.router.navigate(['cart']);
  }
  
}
