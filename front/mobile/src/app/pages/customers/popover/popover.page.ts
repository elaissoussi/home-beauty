import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popover :PopoverController,private router:Router) { }

  ngOnInit() {
  }

  closepopover(){
    this.popover.dismiss();
  }

  MyCom(){
    this.router.navigate([`/order-list`]);
  }

  ordDetail(){
   // this.router.navigate([`/order-detail`]);
  }
}
