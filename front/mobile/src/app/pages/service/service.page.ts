import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from 'src/app/popover/popover.page';
//import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  constructor(private router: Router,private popover:PopoverController) { }

  currentpage(){
   
    
  }

  ngOnInit() {

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
