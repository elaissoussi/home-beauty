import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from 'src/app/pages/customers/popover/popover.page';
import { AuthenticationService } from 'src/app/pages/services/authentication.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

import { CLIENT_ID } from 'src/app/app.constants';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})

export class ServicePage {

  constructor(
    private authenticationService: AuthenticationService, 
    private popover: PopoverController,
    private uniqueDeviceID: UniqueDeviceID) {
    
    if (!this.authenticationService.getClientId()) 
    {
      this.uniqueDeviceID.get()
       .then((uuid: any) => this.authenticationService.setClientId(uuid))
    }

  }


  async OpenPopover(ev: Event) {
    const popver = await this.popover.create({
      component: PopoverPage,
      event: ev,
      translucent: true

    });
    popver.present();
  }


}
