import { Component } from '@angular/core';
import { HaircaireService } from 'src/app/pages/services/haircaire.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/pages/services/cart.service';
import { Platform, PopoverController } from '@ionic/angular';
import { Product } from 'src/app/pages/customers/models/Product'
import { Category } from 'src/app/pages/customers/models/Category';
import { PopoverPage } from 'src/app/pages/customers/popover/popover.page';

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
              private plt :Platform,
              private popover:PopoverController ) {
                this.refreshCart()
                this.plt.ready().then(() => 
                {

                  this.haircareService.getHaircaireProducts().subscribe(
                    response => {
                                 this.products = this.haircareService.convert(response).categories;
                                 this.refreshCart()
                                 console.log(this.products);
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
    this.refreshCart()
   this.router.navigate(['cart']);
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
